import { LightningElement } from 'lwc';
import findAccounts from '@salesforce/apex/AccountController.findAccounts'

export default class ApexImperativeParamDemo2 extends LightningElement {
    accounts
    searchKey ='';
    timer;
    searchHandler(event){
       this.searchKey = event.target.value;
       window.clearTimeout(this.timer)
       this.timer = window.setTimeout(() =>{
        this.callApex()
       },2000)
    }

    callApex(){
        findAccounts({searchKey:this.searchKey}).then(result => {
            this.accounts = result;
           }).catch(error => {
            console.error(error);
           })
    }
}