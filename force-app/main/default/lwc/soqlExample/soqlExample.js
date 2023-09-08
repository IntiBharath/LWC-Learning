import { LightningElement,wire } from 'lwc';
import sortAS from '@salesforce/apex/SoqlExample1.sortAs'


export default class SoqlExample extends LightningElement {
    accounts =[]
    @wire(sortAS)
    accountHandler({data,error}){
        if(data){
            console.log(data)
            this.accounts = data;
        }
        if(error){
            console.error(error)
        }
    }
}