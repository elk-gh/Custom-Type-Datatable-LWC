import { LightningElement, api } from 'lwc';

const validNameRe = /^([a-zA-Z]+):([a-zA-Z]\w*)$/;
const validIconCategory = ['standard','utility','custom','action','doctype'];

export default class CustomIconOutput extends LightningElement {
    @api value = '';

    get isIcon(){
        return validNameRe.test(this.value.trim().toLowerCase()) && validIconCategory.includes(validNameRe.exec(this.value.trim())[1].toLowerCase());
    }

    get getIconValue(){
        return this.value.toLowerCase();
    }

    get isImage(){
        return !this.isIcon;
    }

    get getUrlValue(){
        return this.value;
    }
}