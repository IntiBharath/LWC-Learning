import { LightningElement } from 'lwc';

export default class ConditionRendering extends LightningElement {
 isHidden = false;
 name;

 handleClick(){
     this.isHidden = true;
 }

 changeHandler(event){
   this.name=event.target.value;
 }

 get helloMethod(){
     return this.name === "Hello";
 }
}