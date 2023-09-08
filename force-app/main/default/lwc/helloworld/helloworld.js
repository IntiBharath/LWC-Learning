import { LightningElement,track} from 'lwc';
export default class HelloWorld extends LightningElement {
  fullName="Bharath";
  city="Hyd";
  
  changeHandler(event){
    this.city=event.target.value
  }

  @track Address={
    houseNum:"18-175/1",
    flatNo:103,
    area:"Hanumanpeta",
  }
  trackHandler(event){
    this.Address.area=event.target.value;
    console.log(object.keys(this.Address));
  }
  

  users=["John","Mike","Smith"];
  get userList(){
      return this.users[0];
    }
    num1=30;
    num2=40;
    firstNumber(event){
      this.num1=event.target.value
    }
    secondNumber(event){
      this.num2=event.target.value
    }
    get multiplyNum(){
      return this.num1*this.num2
      
    }



  }