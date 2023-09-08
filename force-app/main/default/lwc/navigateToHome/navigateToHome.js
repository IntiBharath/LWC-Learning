import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavigateToHome extends NavigationMixin(LightningElement) {
    navigateToHome(){
        //[NavigationMixin.Navigate](pageReference,[replace])
        // Pagereference is a object, which takes input properties such as type, attributes{}
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:'home'
            }
        })

    }

    navigateToChatter(){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:'chatter'
            }
        })
    }
}