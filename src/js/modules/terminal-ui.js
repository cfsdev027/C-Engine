import { el } from './el-ui.js';
import { Guid } from './guid.js';
import { ServiceStorage } from './service-storage.js';

export const TerminalUI = {
    container: document.getElementById("terminal"),
    profile: ServiceStorage.get('profile'),

    dispose() {
        this.container.innerHTML = '';
    },

    render() {
        if (!this.container) throw { stack: 'TerminalUI.render()', message_error: 'Missing CONTAINER.' };
      
        if(typeof el !== 'function') throw {
            stack: 'TerminalUI.render()',
            message_error: 'el is not a function.'
        };

        (async () => {
            await this.renderAsync();
        })();
    },

    async renderAsync() {
        
    },

    logSystem(message) {
        if(!this.container) throw { stack: 'TerminalUI.logSystem(message)', message_error: 'Missing CONTAINER.' };

        let e = el('div', ['log-entry', 'system'], {id: Guid.generate()});
        e.innerHTML = message;
      
        this.container.append(e);
    },

    logStory(message) {
        if(!this.container) throw { stack: 'TerminalUI.logSystem(message)', message_error: 'Missing CONTAINER.' };

        let e = el('div', ['log-entry', 'story'], {id: Guid.generate()});
        e.innerHTML = message;
      
        this.container.append(e);
    },

    logEvent(message) {
        if(!this.container) throw { stack: 'TerminalUI.logSystem(message)', message_error: 'Missing CONTAINER.' };

        let e = el('div', ['log-entry', 'event'], {id: Guid.generate()});
        e.innerHTML = message;
      
        this.container.append(e);
    },

    logOptions(message, options) {
        if(!this.container) throw { stack: 'TerminalUI.logSystem(message)', message_error: 'Missing CONTAINER.' };

        let c = el('div', ['log-entry'], {id: Guid.generate()});
      
        let t = el('p', ['log-title'], {id: Guid.generate()});
        t.innerHTML = message;

        let u = el('ul', ['log-ul'], {id: Guid.generate()})

        options.forEach(o => {
            let l = el('li', ['log-li'], {id: Guid.generate()});
            l.textContent = o;

            u.appendChild(l);
        });

        c.append(t, u);
      
        this.container.append(c);
    },
}
