import { LightningElement, wire } from 'lwc';
import { getObjectInfos } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import OPPTY_OBJECT from '@salesforce/schema/Opportunity'

export default class GetObjectInfos extends LightningElement {
    objectApiNames = [ ACCOUNT_OBJECT, OPPTY_OBJECT ]
    objectInfos
    @wire(getObjectInfos, { objectApiNames: '$objectApiNames' })
    objectInfosHandler({data}){
        if(data){
            this.objectInfos = data
        }
    }
}