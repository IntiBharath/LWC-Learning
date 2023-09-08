import { LightningElement } from 'lwc';

export default class StylingInLwc extends LightningElement {
    switchHandler(){
        const elem = this.template.querySelector('p');
        elem.innerText='No pain, No Gain. Nothing comes free in life'
    }
}