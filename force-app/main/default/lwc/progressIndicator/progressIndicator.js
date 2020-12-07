import { LightningElement, api } from 'lwc';

export default class ProgressIndicator extends LightningElement {
    @api value = '';
    @api variant = '';

}