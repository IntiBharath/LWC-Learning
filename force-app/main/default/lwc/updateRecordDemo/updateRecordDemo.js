import { LightningElement,wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import { updateRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact'

const COLS = [
    { label: 'Id', fieldName: 'Id' },
    { label: 'Name', fieldName: 'Name'},
    { label: 'Phone', fieldName: 'Phone', type: 'phone',editable:true },
    { label: 'Title', fieldName: 'Title',editable:true},
    { label: 'Email', fieldName: 'Email',type:'Email'}
];

export default class UpdateRecordDemo extends LightningElement {
 contacts=[]
 columns = COLS
 draftValues =[]
 @wire(getListUi,{objectApiName:CONTACT_OBJECT,listViewApiName:'AllContacts'})
 listViewHandler({data,error}){
    if(data){
        console.log(data)
      this.contacts = data.records.records.map(item =>{
          return{
            "Id":this.getData(item,'Id'),
           "Name":this.getData(item,'Name'),
            "Phone":this.getData(item,'Phone'),
           "Title":this.getData(item,'Title'),
           "Email":this.getData(item,'Email')
          }  
        })

    }if(error){
        console.error(error)
    } 
 }

 getData(data,field){
    return data.fields[field].value
 }
 handleSave(event){
    console.log(JSON.stringify(event.detail.draftValues))
    //draftValues= {"Phone":"(212) ","Id":"0035j00000IP8MlAAL"},{"Phone":"(650)","Id":"0035j00000IP8MkAAL"},{"Title":"SVP, ","Id":"0035j00000IP8MdAAL"}
    //recordInput object takes objectApiName and Fields as the input and return result as promise
    // const recordInput = {apiName:CONTACT_OBJECT.objectApiName, fields:this.formFields}
    const recordInputs = event.detail.draftValues.map(draft=>{
        const fields ={...draft}
        return {fields:fields}
})
    //The above code fields={"Phone":"(650)","Id":"0035j00000IP8MkAAL"}, each draft is a single record, to pass data -->
    // --> to recordInput Object return {fields:{"Phone":"(212) ","Id":"0035j00000IP8MlAAL"}}


    //We will edit multiple record inputs/values and hence we will recordInputs to capture multiple inputs and multiple promises
    const promises = recordInputs.map(recordInput=>updateRecord(recordInput))
    Promise.all(promises).then(result=>{
        console.log('Contact Updated Succesfully')
        this.draftValues=[]
    }).catch(error=>{
        console.log('Error Updating the record',error)
    })
 }
}