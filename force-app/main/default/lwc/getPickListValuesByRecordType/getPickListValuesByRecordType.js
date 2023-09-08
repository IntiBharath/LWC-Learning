import { LightningElement, wire } from 'lwc';
import { getPicklistValuesByRecordType,getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'

export default class GetPickListValuesByRecordType extends LightningElement {
    ratingOptions
    typeOptions
    selectedRating //RatingOption Selected by user
    selectedType //RatingType Selected by user


    @wire(getObjectInfo,{objectApiName: ACCOUNT_OBJECT})
    objectInfo
//Displays all the picklist fields that are available on that RecordType
    @wire(getPicklistValuesByRecordType,{objectApiName: ACCOUNT_OBJECT, recordTypeId:'$objectInfo.data.defaultRecordTypeId'})
        picklistHandler({data,error}){
            if(data){
                console.log(data)
                //Out of all the oicklist values that are generated in console, If you want to select few picklist fields
               this.ratingOptions = this.picklistGenerator(data.picklistFieldValues.Rating)
               this.typeOptions = this.picklistGenerator(data.picklistFieldValues.Type)
            }
            if(error){
                console.error(error)
            }
        }
        /*get options() {
            Combox Componet Syntax
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
        ];
    }*/

    picklistGenerator(data){
        return data.values.map(item=>({label:item.label,value:item.value}))
    }   

    handleChange(event) {
        this.selectedRating = event.detail.value;
    }
    typeChange(event){
        this.selectedType = event.detail.value;
    }
}

    /* handleChange(event){ 
        const name = event.target.name
        const value = event.target.value

        if property name is same as variable name you can write

        const {name,value} = event.target

        console.log(name +'===>'+value) or console.log(event.target.name +'===>'+ event.target.value)
        if(name === 'Rating'){
            this.selectedRating = value
        }
        if(name === 'Type'){
            this.selectedType = value
        }*/
        
    
