import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class CreateRecordDemo extends LightningElement {
    formFields={}
    changeHandler(event){
        const {name, value} = event.target
        /*
        The above code is equal to
        const name = event.target.name
        const value = event.target.value
        */
        this.formFields[name]=value
        /*The above code is equal to
       Add the Name and Value
        formFields ={
            "FirstName":"Bharath"
            "LastName":"Inti"
            "Title":"Admin"
        } */

    }
    createContact(){
        const recordInput = {apiName:CONTACT_OBJECT.objectApiName, fields:this.formFields}
        //recordInput object takes objectApiName and Fields as the input and return result as promise
        createRecord(recordInput).then(result=>{
            this.showToast('Success!!', `contact created with is ${result.id}`)
            this.template.querySelector('form.createForm').reset()
            this.formFields={}
        }).catch(error=>{
            this.showToast('Error Creating record', error.body.message, 'error')
        })
    }

    showToast(title, message, variant){
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant:variant || 'success'
        }))
    }
}