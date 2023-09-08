import { LightningElement } from 'lwc';

export default class QuerySelectionDemo extends LightningElement {
    userList =['John','Mike','David']
    passHandler(){
        const elem = this.template.querySelector('p');
        elem.style.border="1px solid red";
        console.log(elem.innerText);
        const userElements = this.template.querySelectorAll('.name');
        Array.from(userElements).forEach(item => {
            console.log(item.innerText);
            item.setAttribute("title",item.innerText);
        });
        const childElem = this.template.querySelector('.child')
        childElem.innerHTML='<p> I am child element</p>';


    }   
 
}