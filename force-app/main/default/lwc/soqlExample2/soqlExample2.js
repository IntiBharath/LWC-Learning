import { LightningElement,wire } from 'lwc';
import setLimit from '@salesforce/apex/SoqlExample1.setLimit'
import ACCOUNT_ID from '@salesforce/schema/Account.Id'
import ACCOUNT_NAME from '@salesforce/schema/Account.Name'
import ACCOUNT_PHONE from '@salesforce/schema/Account.phone'

const COLS =[
    {label:'Id',fieldName:ACCOUNT_ID.fieldApiName,editable:true},
    {label:'Name',fieldName:ACCOUNT_NAME.fieldApiName},
    {label:'Phone',fieldName:ACCOUNT_PHONE.fieldApiName}
];

export default class SoqlExample2 extends LightningElement {
    columns=COLS;
    Accounts
    @wire(setLimit)
    accountLimit({data,error}){
     if(data){
        console.log(data)
        this.Accounts=data;
     }if(error){
        console.error(error)
     }
    }
}