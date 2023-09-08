import { LightningElement,wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts'

export default class FilteringAndSortingDemo extends LightningElement {
    headings=['Id','FirstName','LastName','Email','Title']
    fullTableData=[]
    filteredTableData=[]
    @wire(getContacts)
    ContactHandler({data,error}){
        if(data){
         console.log(data)
         this.fullTableData=data
         this.filteredTableData=data
        }
        if(error){
          console.log(data)
        }
    }

    filterHandler(event){
        const value = event.target.value;
        console.log(value);
    }
}