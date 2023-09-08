import { LightningElement, wire } from 'lwc';
import ID from '@salesforce/user/Id' //Gives the id of the current logged in user
import User_Name from '@salesforce/schema/User.Name'
import User_Email from '@salesforce/schema/User.Email'
import { getRecord } from 'lightning/uiRecordApi'; //Use this adapter to get record's data

export default class WireDemoUserDetails extends LightningElement {
    userID = ID;
    userDetail;

    //0055j000003a10mAAA
     
    //Syntax for using wire
    // @wire(adapter,{adapterConfig})
    //Property or Function

    @wire(getRecord, {recordId:'0055j000003a10mAAA', fields:[User_Name,User_Email]})

    // Or as wire as reactive @wire(getRecord, {recordId:'$userID', fields:[User_Name,User_Email]})

    userDetailHandler({data,error}){
        //userDetailHandler(response)
        //Console.log(response) Every response consists 2 things {data,error}, data holds the fields value
        if(data){
            console.log(data);
            this.userDetail = data.fields
        }
        if(error){
            console.error(error)
        }
    }
    //Wire service as property
    @wire(getRecord, {recordId:'0055j000003a10mAAA', fields:[User_Name,User_Email]})
    userDetailProperty

}