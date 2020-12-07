import { LightningElement, api } from 'lwc';

export default class ToggleButtonOutput extends LightningElement {
    @api checked = '';
    @api buttonDisabled = false;
    @api rowId;

    handleToggle() {
        const event = CustomEvent('selectedrec', {
            composed: true,
            bubbles: true,
            cancelable: true,
            detail: {
                rowId: this.rowId,
            },
        });
        this.dispatchEvent(event);
    }

    get getInactiveMsg(){
        return this.buttonDisabled?'Disabled':'Not Selected';
    }
}