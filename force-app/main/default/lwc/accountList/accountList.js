import { LightningElement} from 'lwc';

export default class AccountList extends LightningElement {
  name ="Bharath";
  city="Hyderabad";


 changeHandler(event){
     this.city=event.target.value
 }
}