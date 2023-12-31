import { LightningElement,api } from 'lwc';

export default class LightningLoader extends LightningElement {
    @api spinnerText=''
    @api size='medium'
    @api variant ='base'//base,brand, inverse

    get helpText(){
        return this.spinnerText?this.spinnerText:'Loading Spinner'
    }
    
}