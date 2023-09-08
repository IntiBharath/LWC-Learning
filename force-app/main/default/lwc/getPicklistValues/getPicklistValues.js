import { LightningElement,wire} from 'lwc';
import { getPicklistValues,getObjectInfo } from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
export default class GetPicklistValues extends LightningElement {
    selectedIndustry = '';
    industryOptions =[]
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectInfo

    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: INDUSTRY_FIELD })
    industryHandler({data, error}){
        if(data){
            console.log(data)
           this.industryOptions=[...this.generatePicklist(data)]
        }
        if(error){
            console.error(error)
        }
    }
  //refer combobox component
    /*get options() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
        ];
    }*/
    generatePicklist(data){
        return data.values.map(item=>({label:item.label,value:item.value}))

    }
    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }

}