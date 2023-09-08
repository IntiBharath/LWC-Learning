import { LightningElement,wire } from 'lwc';
import { getListInfoByName } from 'lightning/uiListsApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class GetListInfoByName extends LightningElement {
    displayColumns
    error
    @wire(getListInfoByName, {
        objectApiName: ACCOUNT_OBJECT,
        listViewApiName: 'AllAccounts'})
    listInfo({data,error}){
        if(data){
            console.log(data)
        this.displayColumns = data.displayColumns
        }
        if(error){
          console.error(error)
        }
    }       
}