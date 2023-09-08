import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {

    closeHandler(){
        const myEvent = new CustomEvent('close',{
            detail: "This data is coming from Child Component"
        });
        this.dispatchEvent(myEvent);
    }
}