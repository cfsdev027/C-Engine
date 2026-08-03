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
        let elAttributesSection = this.makeAttributesSection();

        let elSidebar = el('div', ['sidebar'], [id: 'sidebar']);
        elSidebar.append(elProfileSection, elStatsSection, elAttributesSection);

        (async () => {
            await this.renderAsync();
        })();
    },

    async renderAsync() {
        
    }

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

    makeAttributesSection() {
        let elAttributesLabel = el('h3', ['attributes-label'], [id: 'attributes-label']);
        elStatsLabel.innerHTML = "ATTRIBUTES";
        
        let elAttributesGrid = this.makeAttributesGrid();

        let elAttributesSection = el('section', ['attributes-group'], [id: 'attributes-group']);
        elAttributesSection.append(elAttributesLabel, elAttributesGrid);

        return elAttributesSection;
    },

    makeAttributesGrid() {
        let elSTRComponent = this.makeSTRComponent();
        let elDEXComponent = this.makeDEXComponent();
        let elINTComponent = this.makeINTComponent();
        let elVITComponent = this.makeVITComponent();
        let elWITComponent = this.makeWITComponent();
        let elLUKComponent = this.makeLUKComponent();
        
        let elAttributesGrid = el('div', ['attributes-grid'], [id: 'attributes-grid']);
        elAttributesGrid.append(elSTRComponent, elDEXComponent, elINTComponent, elVITComponent, elWITComponent, elLUKComponent);

        return elAttributesGrid;
    },

    makeSTRComponent() {
        let elSTRLabel = el('span', ['attr-name', 'str-label'], [id: 'str-label']);
        elSTRLabel.innerHTML = "STR";

        let elSTRValue = el('span', ['attr-val', 'str-val'], [id: 'str-val']);
        elSTRValue.innerHTML = "0";

        let elSTRContainer = el('div', ['attr-box', 'str-container'], [id: 'str-container']);
        elSTRContainer.append(elSTRLabel, elSTRValue);

        return elSTRContainer;
    },

    makeDEXComponent() {
        let elDEXLabel = el('span', ['attr-name', 'dex-label'], [id: 'dex-label']);
        elDEXLabel.innerHTML = "DEX";

        let elDEXValue = el('span', ['attr-val', 'dex-val'], [id: 'dex-val']);
        elDEXValue.innerHTML = "0";

        let elDEXContainer = el('div', ['attr-box', 'dex-container'], [id: 'dex-container']);
        elDEXContainer.append(elDEXLabel, elDEXValue);

        return elDEXContainer;
    },

    makeINTComponent() {
        let elINTLabel = el('span', ['attr-name', 'int-label'], [id: 'int-label']);
        elINTLabel.innerHTML = "INT";

        let elINTValue = el('span', ['attr-val', 'int-val'], [id: 'int-val']);
        elINTValue.innerHTML = "0";

        let elINTContainer = el('div', ['attr-box', 'int-container'], [id: 'int-container']);
        elINTContainer.append(elINTLabel, elINTValue);

        return elINTContainer;
    },

    makeVITComponent() {
        let elVITLabel = el('span', ['attr-name', 'vit-label'], [id: 'vit-label']);
        elVITLabel.innerHTML = "VIT";

        let elVITValue = el('span', ['attr-val', 'vit-val'], [id: 'vit-val']);
        elVITValue.innerHTML = "0";

        let elVITContainer = el('div', ['attr-box', 'vit-container'], [id: 'vit-container']);
        elVITContainer.append(elVITLabel, elVITValue);

        return elVITContainer;
    },

    makeWISComponent() {
        let elWISLabel = el('span', ['attr-name', 'wis-label'], [id: 'wis-label']);
        elWISLabel.innerHTML = "WIS";

        let elWISValue = el('span', ['attr-val', 'wis-val'], [id: 'wis-val']);
        elWISValue.innerHTML = "0";

        let elWISContainer = el('div', ['attr-box', 'wis-container'], [id: 'wis-container']);
        elWISContainer.append(elWISLabel, elWISValue);

        return elWISContainer;
    },

    makeLUKComponent() {
        let elLUKLabel = el('span', ['attr-name', 'luk-label'], [id: 'luk-label']);
        elLUKLabel.innerHTML = "LUK";

        let elLUKValue = el('span', ['attr-val', 'luk-val'], [id: 'luk-val']);
        elLUKValue.innerHTML = "0";

        let elLUKContainer = el('div', ['attr-box', 'luk-container'], [id: 'luk-container']);
        elLUKContainer.append(elLUKLabel, elLUKValue);

        return elLUKContainer;
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
