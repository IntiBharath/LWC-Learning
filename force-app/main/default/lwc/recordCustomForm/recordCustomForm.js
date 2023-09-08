import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class RecordCustomForm extends LightningElement {
    inputName=''
    Account = ACCOUNT_OBJECT;

    inputHandler(event){
        this.inputName= event.target.value;
    }

    submitHandler(event){
        event.preventDefault(); //Prevents page refresh when form is submitted
        const inputCmp = this.template.querySelector('lightning-input')
        const value = inputCmp.value;
        //If the input doesnot contain India in it
        if(!value.includes('India')){
            //setCustomValidity() is used for setting the error message
            inputCmp.setCustomValidity('The Account name must contain India')
        }else{
            inputCmp.setCustomValidity('');
            //Fectchimg Account object All fields
            const field= event.detail.fields
            field.Name = this.inputName
            // field.Amount,field.Country,field.Currency,field followed by api name
            this.template.querySelector('lightning-record-edit-form').submit(field)
        }
        inputCmp.reportValidity()
        //reportValidity() is used for throwing the error message
    }

    successHandler(event){
      const showToast= new ShowToastEvent({
            title: 'Account Created Succesfully',
            message: "Record ID: "+event.detail.id,
            variant: 'success'
        })
        this.dispatchEvent(showToast);
    }

    errorHandler(event){
        const showToast= new ShowToastEvent({
            title: 'Error Creating Account',
            message: event.detail.message,
            variant: 'error'
        })
        this.dispatchEvent(showToast);

    }
}