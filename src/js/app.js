// Coloque isso no topo do seu index.js (ou arquivo principal)
window.onerror = function(msg, url, line) {
    alert("Erro Global: " + msg + "\nLocal: " + url + "\nLinha: " + line);
    return false;
};

window.addEventListener('unhandledrejection', function (event) {
    alert("Erro de Promessa: " + event.reason);
});

import { ServiceCookies } from './modules/service-cookies.js';
import { ServiceStorage } from './modules/service-storage.js';

// Função utilitária para injetar CSS com cache-busting
function appendStyleSheetWithoutCache(css) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `./css/${css}?v=${Date.now()}`; 
    document.head.appendChild(link);
}

// GARANTIA: Só executa quando o DOM estiver completamente carregado
window.addEventListener('DOMContentLoaded', () => {
    (async () => {
        try {
            // Injeta as folhas de estilo com segurança
            appendStyleSheetWithoutCache('style.css');
            
            let profile = ServiceStorage.get('profile');
        } catch(err) {
            alert(err);
        }
    })();
});
