import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub'
export default class PubSubComponentB extends LightningElement {
    message
    //Onload of the compom=net call this methos, So that we subscribe to another component
    connectedCallback(){
        this.callSubscribe()
    }

    callSubscribe(){
        pubsub.subscribe('componentA',(message)=>{
            this.message = message;
            })


    }
}