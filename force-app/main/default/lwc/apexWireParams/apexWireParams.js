import { LightningElement, wire } from 'lwc';
import filterAccountType from '@salesforce/apex/AccountController.filterAccountType'
export default class ApexWireParams extends LightningElement {
    selectedType=''
    @wire(filterAccountType,{type:'$selectedType'})
    filteredAccounts

    get typeOptions() {
        return [
            { label: 'Customer - Direct', value: 'Customer - Direct' },
            { label: 'Prospect', value: 'Prospect' }
        ];
    }

    handleChange(event){
        this.selectedType = event.target.value
    }
}