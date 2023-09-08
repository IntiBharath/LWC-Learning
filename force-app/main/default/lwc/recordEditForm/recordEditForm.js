import { LightningElement } from 'lwc';

import Contact_OBJECT from '@salesforce/schema/contact';
import NAME from '@salesforce/schema/Contact.Name';
import EMAIl from '@salesforce/schema/Contact.Email';
import AccountId from '@salesforce/schema/Contact.AccountId';
import Title from '@salesforce/schema/Contact.Title';


export default class RecordEditForm extends LightningElement {
    objectName = Contact_OBJECT;
    fields={
        Name:NAME,
        Email:EMAIl,
        Account:AccountId,
        title:Title
    }
handleReset(){
    const inputFields = this.template.querySelectorAll('lightning-input-field')

    if(inputFields){
     //ArrayFrom converting nodes of Array to proper Array
      Array.from(inputFields).forEach(item => {
        item.reset();
      });
    }

}

}