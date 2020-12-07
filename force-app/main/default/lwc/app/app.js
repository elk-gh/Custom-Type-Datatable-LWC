import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    toggleExampleData = [
        {Id: 1, isSelected: true, name: 'Google', website: 'https://google.com'},
        {Id: 2, isSelected: false, name: 'Facebook', website: 'https://facebook.com'},
        {Id: 3, isSelected: true, name: 'DevLife', website: 'https://devlife.tech'},
        {Id: 4, isSelected: false, name: 'Gmail', website: 'https://gmail.com', isDisabled: true}
    ];
    toggleExampleColumns = [
        { label: 'Custom Buttons', fieldName: 'isSelected', type: 'toggleButton',
            typeAttributes: { 
                buttonDisabled: { fieldName: 'isDisabled' }, 
                rowId: { fieldName: 'Id' }, 
            }
        },
        { label: 'Service', fieldName: 'name', iconName: 'custom:custom18' },
        { label: 'Website', fieldName: 'website', type: 'url', iconName: 'custom:custom20' },
    ];
    iconExampleData = [
        {Id: 1, richContent: '225 George St, <br> Sydney	NSW	2000	LEK Consulting', name: 'Google', website: 'https://google.com'},
        {Id: 2, richContent: '<s>Strikethrough Text</s>', name: 'Facebook', website: 'https://facebook.com'},
        {Id: 3, richContent: '<i>Italic Text</i>', name: 'DevLife', website: 'https://devlife.tech'},
        {Id: 4, richContent: '<strong>Bold Text</strong>', name: 'Gmail', website: 'https://gmail.com', isDisabled: true}
    ];
    iconExampleColumns = [
        { label: 'Escape HTML Characters', fieldName: 'richContent', type: 'richText' },
        { label: 'Service', fieldName: 'name', iconName: 'custom:custom18' },
        { label: 'Website', fieldName: 'website', type: 'url', iconName: 'custom:custom20' },
    ];
    richTextExampleData = [
        {Id: 1, icon: 'https://cdn0.iconfinder.com/data/icons/social-network-9/50/2-512.png', name: 'Google', website: 'https://google.com'},
        {Id: 2, icon: 'https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png', name: 'Facebook', website: 'https://facebook.com'},
        {Id: 3, icon: 'https://devlife.tech/wp-content/uploads/2020/06/Final-Favicon.png', name: 'DevLife', website: 'https://devlife.tech'},
        {Id: 4, icon: 'https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/gmail-512.png', name: 'Gmail', website: 'https://gmail.com', isDisabled: true}
    ];
    richTextExampleColumns = [
        { label: 'Custom Images', fieldName: 'icon', type: 'icon' },
        { label: 'Service', fieldName: 'name', iconName: 'custom:custom18' },
        { label: 'Website', fieldName: 'website', type: 'url', iconName: 'custom:custom20' },
    ];
    progressExampleData = [
        {Id: 1, progress: 20, name: 'Google', website: 'https://google.com', variant : 'warning'},
        {Id: 2, progress: 40, name: 'Facebook', website: 'https://facebook.com', variant : 'base'},
        {Id: 3, progress: 60, name: 'DevLife', website: 'https://devlife.tech', variant : 'expired'},
        {Id: 4, progress: 80, name: 'Gmail', website: 'https://gmail.com', variant : 'base-autocomplete'}
    ];
    progressExampleColumns = [
        { label: 'Progress', fieldName: 'progress', type: 'progressIndicator',
        typeAttributes: { 
            variant: { fieldName: 'variant' }, 
        }},
        { label: 'Service', fieldName: 'name', iconName: 'custom:custom18' },
        { label: 'Website', fieldName: 'website', type: 'url', iconName: 'custom:custom20' },
    ];

    handleSelectedRec(event){
        const { rowId } = event.detail;
    }

    handleSectionToggle(event) {
        const openSections = event.detail.openSections;

        if (openSections.length === 0) {
            this.activeSectionsMessage = 'All sections are closed';
        } else {
            this.activeSectionsMessage =
                'Open sections: ' + openSections.join(', ');
        }
    }
}
