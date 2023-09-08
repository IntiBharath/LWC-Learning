import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList =['Audi',"Benz","Hyundai","Kia"];

    ceoList=[
      {
          id:1,
          name:"Sundar",
          company:"Google"
      },
      {
         id:2,
         name:"Marc Benioff",
         company:"Salesforce"
      },
      {
          id:3,
          name:"Satya Nadella",
          company:"Microsoft"
      }
    ]
}