import { LightningElement, wire } from 'lwc';
import FIRST_NAME from '@salesforce/schema/Contact.FirstName'
import LAST_NAME from '@salesforce/schema/Contact.LastName'
import EMAIL from '@salesforce/schema/Contact.Email'
import { reduceErrors } from 'c/ldsUtils';
import getContacts from '@salesforce/apex/ContactController.getContacts'

const COLS = [
    { label: 'FirstName', fieldName: FIRST_NAME.fieldApiName, type:'text' },
    { label: 'LastName', fieldName: LAST_NAME.fieldApiName,type:'text' },
    { label: 'Email', fieldName: EMAIL.fieldApiName,type:'email'}
];

export default class ContactList extends LightningElement {
    columns=COLS
    contacts=[]
    @wire(getContacts)
    contactHandler

    get errors(){
        return (this.contactHandler.error) ?
        reduceErrors(this.contactHandler.error) : [];
        }
}