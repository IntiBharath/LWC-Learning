import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
//list of options that are slected by user
selected={};
 selectedCorrectAns = 0;
 isSubmitted = false;   
questionContainer=[
    {
        id:"Question1",
        question:"What is the capital of India?",
        answers:{
            a:"Mumbai",
            b:"Madhya Pradesh",
            c:"Delhi",
            d:"Punjab"
        },
        correctAnswer:"c"
    },
    {
        id:"Question2",
        question:"CEO of Microsoft?",
        answers:{
            a:"Satya Nadella",
            b:"Bill Gates",
            c:"Jeff Bezos",
            d:"Sundhar Pichai"
        },
        correctAnswer:"a"
    },
    {
        id:"Question3",
        question:"Lightning Web Componenets is based on which programming language?",
        answers:{
            a:"APEX",
            b:"Java",
            c:"HTMl,CSS and Javascript",
            d:"Aura"
        },
        correctAnswer:"c"
    }           
]

changeHandler(event){
    const{name,value}=event.target
    /*Alterative for above code
    const name=event.target.name
    const value=event.target.value*/
    this.selected={...this.selected,[name]:value};
    //For suppose if you select option a in question 1, then [name]:value will be [Question1]:a
    // then this.selected ={"Question1":a}, if later then option b is selected in Question2,
    // then this.selected={"Question1":a,"Question2":b}
    console.log(this.selected);
    
}

get allNotSelected(){
    return Object.keys(this.selected).length != Object.keys(this.questionContainer).length
}

get isSocredFull(){
    return `slds-text-heading_large ${this.questionContainer.length === this.selectedCorrectAns?'slds-text-color_success':'slds-text-color_error'}`;
}


submitHandler(event){
    event.preventDefault();
    this.isSubmitted=true;
   //this.selected = {Question1: 'a', Question2: 'b', Question3: 'b'} 
  let correct = this.questionContainer.filter(item=>this.selected[item.id] === item.correctAnswer);
  this.selectedCorrectAns = correct.length;
  console.log("Selected Correct Answers:"+this.selectedCorrectAns);
}
resetHandler(event){
    this.selected={}
    this.selectedCorrectAns = 0;
    this.isSubmitted=false;
}

}
