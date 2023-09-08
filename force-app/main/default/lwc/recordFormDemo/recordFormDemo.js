import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import Name_FIELD from '@salesforce/schema/Account.Name'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'

export default class RecordFormDemo extends LightningElement {
    objectName = ACCOUNT_OBJECT;
    fieldList =[Name_FIELD,ANNUAL_REVENUE_FIELD,TYPE_FIELD,INDUSTRY_FIELD]

    successHandler(event){
        const evt = new ShowToastEvent({
            title: "Account Created",
            message:"Record ID:" + event.detail.id,
            variant: "success"
          })
          this.dispatchEvent(evt);
    }
}