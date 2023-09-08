import { LightningElement,wire } from 'lwc';
import {getObjectInfo,getPicklistValues} from 'lightning/uiObjectInfoApi'
import Car_Object from '@salesforce/schema/Car__c'
import Category_Field from '@salesforce/schema/Car__c.Category__c'
import Make_Field from '@salesforce/schema/Car__c.Make__c'
const CATEGORY_ERROR ='Error Loading Categories'
const MAKE_ERROR ='Error Loading MakeTypes'

//Lightning Message Service and a message Channel
import {publish, MessageContext} from 'lightning/messageService'
import CARS_FILTERED_MESSAGE from '@salesforce/messageChannel/CarsFiltered__c'
export default class CarFilter extends LightningElement {
    timer
    filters={
        searchKey:'',
        maxPrice:'999999'
    }
    categoryError=CATEGORY_ERROR
    makeError=MAKE_ERROR

    /*Load context for LMS */
    @wire(MessageContext)
    messageContext

    /*Fetching Car Object Info*/
    @wire(getObjectInfo,{objectApiName:Car_Object})
    carObjectInfo

    /*Fectching Category PicklistValues*/
    @wire(getPicklistValues,{recordTypeId:'$carObjectInfo.data.defaultRecordTypeId',fieldApiName:Category_Field})
    categories

    /* Fectching Make Picklist Vaues */
    @wire(getPicklistValues,{recordTypeId:'$carObjectInfo.data.defaultRecordTypeId',fieldApiName:Make_Field})
    makeType

    searchHandler(event){
        console.log(event.target.value)
    //Insted of  this.filters.searchKey = event.target.value,We use speard operator[...] 
    this.filters={...this.filters,"searchKey":event.target.value}
    this.sendDataToCarList();
    }

    sliderHandler(event){
        console.log(event.target.value)
    //Insted of  this.filters.searchKey = event.target.value,We use speard operator[...] 
    this.filters={...this.filters,"maxPrice":event.target.value}
    this.sendDataToCarList();
    }

    handleCheckBox(event){
        // if Categories are not there in filters object
        if(!this.filters.categories){
            const categories = this.categories.data.values.map(item=>item.value)
            const makeType = this.makeType.data.values.map(item=>item.value)
            this.filters = {...this.filters, categories, makeType}
            //Instead of this.filters = {...this.filters,categories:categories,makeType:makeType} we are using short-hand notation this.filters = {...this.filters,categories,makeType}
        }
        const{name,value} = event.target.dataset
        console.log("Name",name)
        console.log("Value",value)

        if(event.target.checked){
            //name is category or makeType
            //checked is a property that tells whether the checkbox is checked or not, If checked the value will be added to the Category or makeType
            if(!this.filters[name].includes(value)){
                this.filters[name]=[...this.filters[name],value]
            }
        }else{
            // If checkbox unchecked, then value will be remove from categories or maketype values
            this.filters[name] = this.filters[name].filter(item=>item !==value)
            }
            this.sendDataToCarList()

    }

    sendDataToCarList(){
        //Once the previous timer is called in order to cancel that and reset time we use clearTimeout() above setTimeout()
        window.clearTimeout(this.timer)
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        this.timer = window.setTimeout(()=>{
            publish(this.messageContext,CARS_FILTERED_MESSAGE,{
                filters:this.filters
            })
        },400)
        
    }
}