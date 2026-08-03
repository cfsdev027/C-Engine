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

        let elProfileSection = this.makeProfileSection();
        let elStatsSection = this.makeStatsSection();

        let elSidebar = el('div', ['sidebar'], [id: 'sidebar']);
        elSidebar.append(elProfileSection);

        (async () => {
            await this.dataInitAsync();
        })();
    },

    makeProfileSection() {
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

        return elProfileSection;
    },

    makeStatsSection() {
        let elStatsLabel = el('h3', ['stats-label'], [id: 'stats-label']);
        elStatsLabel.innerHTML = "STATUS";

        let elHPComponent = this.makeHPComponent();
        let elMPComponent = this.makeMPComponent();
        let elXPComponent = this.makeXPComponent();

        let elStatsSection = el('section', ['stats-group'], [id: 'stats-group']);
        elStatsSection.append(elStatsLabel, elHPComponent, elMPComponent, elXPComponent);

        return elStatsSection;
    },

    makeHPComponent() {
        let elHPMinLabel = el('span', ['hp-min-label'], [id: 'hp-min-label']);
        elHPMinLabel.innerHTML = "0";

        let elHPSepLabel = el('span', ['hp-sep-label'], [id: 'hp-sep-label']);
        elHPMinLabel.innerHTML = "/";
      
        let elHPMaxLabel = el('span', ['hp-max-label'], [id: 'hp-max-label']);
        elHPMaxLabel.innerHTML = "0";

        let elHPSpan = el('span', ['stat-label'], [id: 'hp-label']);
        elHPSpan.innerHTML = "HP";
        elHPSpan.append(elHPMinLabel, elHPSepLabel, elHPMaxLabel);

        let elHPBar = this.makeHPBar();

        let elHPContainer = el('div', ['stat-bar-container', 'hp-bar-container'], [id: 'hp-bar-container']);
        elHPContainer.append(elHPSpan, elHPBar);

        return elHPContainer;
    },

    makeHPBar() {
        let elHPBarFill = el('div', ['bar-fill', 'hp'], [id: 'hp-bar-fill']);
        elHPBarFill.style.width = "100%";
        
        let elHPBar = el('div', ['bar-bg'], [id: 'hp-bar-bg']);
        elHPBar.append(elHPBarFill);

        return elHPBar;
    },

    makeMPComponent() {
        let elMPMinLabel = el('span', ['mp-min-label'], [id: 'mp-min-label']);
        elMPMinLabel.innerHTML = "0";

        let elHPSepLabel = el('span', ['mp-sep-label'], [id: 'mp-sep-label']);
        elMPMinLabel.innerHTML = "/";
      
        let elMPMaxLabel = el('span', ['mp-max-label'], [id: 'mp-max-label']);
        elMPMaxLabel.innerHTML = "0";

        let elMPSpan = el('span', ['stat-label'], [id: 'mp-label']);
        elMPSpan.innerHTML = "MP";
        elMPSpan.append(elMPMinLabel, elMPSepLabel, elMPMaxLabel);

        let elMPBar = this.makeMPBar();

        let elMPContainer = el('div', ['stat-bar-container', 'mp-bar-container'], [id: 'mp-bar-container']);
        elMPContainer.append(elMPSpan, elMPBar);

        return elMPContainer;
    },

    makeMPBar() {
        let elMPBarFill = el('div', ['bar-fill', 'mp'], [id: 'mp-bar-fill']);
        elMPBarFill.style.width = "100%";
        
        let elMPBar = el('div', ['bar-bg'], [id: 'mp-bar-bg']);
        elMPBar.append(elMPBarFill);

        return elMPBar;
    },

    makeXPComponent() {
        let elXPMinLabel = el('span', ['xp-min-label'], [id: 'xp-min-label']);
        elMPMinLabel.innerHTML = "0";

        let elXPSepLabel = el('span', ['xp-sep-label'], [id: 'xp-sep-label']);
        elMPMinLabel.innerHTML = "/";
      
        let elXPMaxLabel = el('span', ['xp-max-label'], [id: 'xp-max-label']);
        elMPMaxLabel.innerHTML = "0";

        let elXPSpan = el('span', ['stat-label'], [id: 'xp-label']);
        elXPSpan.innerHTML = "MP";
        elXPSpan.append(elXPMinLabel, elXPSepLabel, elXPMaxLabel);

        let elXPBar = this.makeXPBar();

        let elXPContainer = el('div', ['stat-bar-container', 'xp-bar-container'], [id: 'xp-bar-container']);
        elXPContainer.append(elXPSpan, elXPBar);

        return elXPContainer;
    },

    makeXPBar() {
        let elXPBarFill = el('div', ['bar-fill', 'xp'], [id: 'xp-bar-fill']);
        elXPBarFill.style.width = "100%";
        
        let elXPBar = el('div', ['bar-bg'], [id: 'xp-bar-bg']);
        elXPBar.append(elXPBarFill);

        return elXPBar;
    },
};
