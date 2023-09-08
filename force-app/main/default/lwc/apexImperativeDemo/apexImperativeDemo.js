import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'

export default class ApexImperativeDemo extends LightningElement {
    accounts
    handleClick(){
        getAccountList().then(result=>{
           console.log(result)
           this.accounts = result
        }).catch(error=>{
            console.error(error)
        })

        /*.catch(error => {
                this.errors = reduceErrors(error); // code to execute if the promise is rejected
            });*/
    }
}