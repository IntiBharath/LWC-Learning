import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ToastNotification extends LightningElement {
 toastHandler(){
        const evt = new ShowToastEvent({
            title: 'Success!!',
            message: '{0} Hurray, I have learned Toast {1}',
            variant: 'success'
        });
        this.dispatchEvent(evt);
    }

    toastHandlerTwo(){
        this.ShowToast('Error!','{0} Failed to learn Toast {1}','error')
    }

    toastHandlerThree(){
        this.ShowToast('Error!','Failed to learn Toast','warning')
    }

    ShowToast(title,message,variant){
        const evt = new ShowToastEvent({
            title,
            message,
            variant,
            messageData:[
                'Salesforce',{
                    url: "www.google.com",
                    label: "Click Here"
                }
            ]
        });
        this.dispatchEvent(evt);

    }

}