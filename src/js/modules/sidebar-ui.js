import { el } from './el-ui.js';
import { ServiceStorage } from './service-storage.js';

export const SidebarUI = {
    container: document.getElementById("game-container"),
    profile: ServiceStorage.get('profile');

    dispose() {
        this.container.classList.add('d-none');
        this.container.innerHTML = '';
    },

    render() {
        if (!this.container) throw { stack: 'SidebarUI.render()', message_error: 'Missing CONTAINER.' };
      
        if(typeof el !== 'function') throw {
            stack: 'SidebarUI.render()',
            message_error: 'el is not a function.'
        };

        let elSidebar = el('div', ['sidebar'], [id: 'sidebar']);
      
        let elCharacterName = el('h2', ['character-name'], [id: 'character-name']);
        elCharacterName.innerHTML = "UNDEFINED";
        
        let elRaceBadge = el('span', ['race-badge'], [id: 'race-badge']);
        elRaceBadge.innerHTML = "UNDEFINED";
        
        let elClassBadge = el('span', ['class-badge'], [id: 'class-badge']);
        elClassBadge.innerHTML = "UNDEFINED";
      
        let elLevelBadge = el('span', ['level-badge'], [id: 'level-badge']);
        elLevelBadge.innerHTML = "Nv. 0";

        let elCharacterMeta = el('p', ['character-meta'], [id: 'character-meta']);
        elCharacterMeta.append(elRaceBadge, elClassBadge, elLevelBadge);

        let elProfileSection = el('section', ['profile-card'], [id: 'profile-card']);
        elProfileSection.append(elCharacterName, elCharacterMeta);

        let elStatsLabel = el('h3', ['stats-label'], [id: 'stats-label']);
        elStatsLabel.innerHTML = "STATUS";

        let elHPMinLabel = el('span', ['hp-min-label'], [id: 'hp-min-label']);
        elHPMinLabel.innerHTML = "0";

        let elHPSepLabel = el('span', ['hp-sep-label'], [id: 'hp-sep-label']);
        elHPMinLabel.innerHTML = "/";
      
        let elHPMaxLabel = el('span', ['hp-max-label'], [id: 'hp-max-label']);
        elHPMaxLabel.innerHTML = "0";

        let elHPLabel = el('span', ['stat-label'], [id: 'hp-label']);
        elHPLabel.innerHTML = "HP";
        elHPLabel.append(elHPMinLabel, elHPSepLabel, elHPMaxLabel);

        let elHPContainer = el('div', ['stat-label'], [id: 'hp-container']);
        let elHPContainer = el('div', ['stat-bar-container'], [id: 'stat-bar-container']);
        elHPContainer.append(elHPLabel);
      
        let elStatsSection = el('section', ['stats-group'], [id: 'stats-group']);
        elStatsSection.append(elStatsLabel);

        <div class="stat-bar-container">
          <div class="stat-label"><span>HP</span> <span>60/100</span></div>
          <div class="bar-bg"><div class="bar-fill hp" style="width: 60%;"></div></div>
        </div>

        const elNavbarContainer = el('div', ['d-flex', 'flex-column', 'align-items-stretch']);
        elNavbarContainer.style.maxWidth = '992px !important';
        
        const elNavbarBrand = el('a', ['navbar-brand', 'sidebar-header', 'flex-grow-1'], { id: 'navbar-brand', href: `/COP/src/index.html?t=${Date.now()}` });
        elNavbarBrand.innerHTML = '<i class="bi bi-gear-fill logo-icon"></i> <span class="logo-text">OP-Control</span>';

        const elNavbarGroup = el('div', ['navbar-toggler-group', 'navbar-toggler', 'btn-group'], { role: 'group' });
        
        const elUserInfoToggler = el('button', ['btn', 'btn-dark', 'user-info-toggler', 'pr-1'], { type: 'button' });
        elUserInfoToggler.addEventListener('click', () => {
            this.navbarCollapseController('user-info');
        });
        
        const elUserInfoTogglerIcon = el('span', ['bi', 'bi-person']);

        elUserInfoToggler.append(elUserInfoTogglerIcon);

        const elLogoutToggler = el('button', ['btn', 'btn-dark', 'logout-toggler', 'pr-1'], { type: 'button' });
        elLogoutToggler.addEventListener('click', () => {
            this.navbarCollapseController('logout');
            this.logout();
        });
        
        const elLogoutTogglerIcon = el('span', ['bi', 'bi-box-arrow-right']);

        elLogoutToggler.append(elLogoutTogglerIcon);
        
        const elNavbarToggler = el('button', ['btn', 'btn-dark', 'options-toggler'], { type: 'button' });
        elNavbarToggler.addEventListener('click', () => {
            this.navbarCollapseController('options');
        });

        const elNavbarTogglerIcon = el('span', ['navbar-toggler-icon']);
        elNavbarToggler.append(elNavbarTogglerIcon);

        elNavbarGroup.append(elUserInfoToggler, elLogoutToggler, elNavbarToggler);

        const elNavbarCollapseMobile = el('div', ['collapse', 'navbar-collapse', 'w-100'], { id: 'navbar-collapse-mobile' });
        const elNavbarCollapseDesktop = el('div', ['collapse', 'navbar-collapse', 'w-100'], { id: 'navbar-collapse-desktop' });
        this.makeOptionsMenu(elNavbarCollapseDesktop);
        
        elNavbarContainer.append(elNavbarBrand, elNavbarGroup, elNavbarCollapseMobile, elNavbarCollapseDesktop);
        this.container.append(elNavbarContainer);

        (async () => {
            await this.dataInitAsync();
        })();
    },

    async dataInitAsync() {
    },
};
