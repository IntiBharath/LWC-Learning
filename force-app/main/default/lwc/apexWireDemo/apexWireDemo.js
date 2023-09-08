import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'

export default class ApexWireDemo extends LightningElement {
    accountList
    @wire(getAccountList)
    AccountHandler
    
    @wire(getAccountList)
    account({data,error}){
        if(data){
            console.log(data)
          this.accountList = data.map(item=>{
             let newType = item.Type === 'Customer - Direct'?'Customer':item.Type === 'Prospect'?'Interesting Lead':'----'
             return {...item,newType}
          })
        }
        if(error){
            console.error(error)
        }
    }
}