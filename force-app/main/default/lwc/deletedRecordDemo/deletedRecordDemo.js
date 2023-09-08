import { LightningElement } from 'lwc';
import{deleteRecord} from 'lightning/uiRecordApi'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DeletedRecordDemo extends LightningElement {
    recordId
    changeHandler(event){
        this.recordId = event.target.value
    }

    deleteHandler(){
     deleteRecord(this.recordId).then(result=>{
        console.log('Deleted Succesfully')
        this.showToast('Success!!','Record Deleted','success')
     }).catch(error=>{
        console.error(error)
     })
    }

    showToast(title, message, variant){
       const evt = new ShowToastEvent({
        title,
        message,
        variant
       });
       this.dispatchEvent(evt);
    }
}