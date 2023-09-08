import { LightningElement,wire } from 'lwc';
import { getObjectInfo} from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'

export default class GetObjectInfoDemo extends LightningElement {
    defaultRecordTypeId
    apiName
 @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})// Use this wire adapter to get metadata about the specific object
 objectInfo({data,error}){
    if(data){
        this.defaultRecordTypeId = data.defaultRecordTypeId
        this.apiName = data.apiName
    }
    if(error){
        console.error(error)
    }
 }
 //Wire Service as Property
 @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectContent;
}