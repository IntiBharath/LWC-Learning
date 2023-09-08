import { LightningElement} from 'lwc';

export default class P2cParentComponent extends LightningElement {
    carousel =[
     {
        src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
        header:"First Card",
        description: "First card description.",
     },
     {
        src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
        header:"Second Card",
        description:"Second card description.",
     },
     {
        src :"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
        header : "Thrid Card",
        description : "Third card description."
     }
    ]
    
    Percent = 10;

    changeHandler(event){
        this.Percent = event.target.value;
    }

    resetHandler(){
        this.template.querySelector('c-p2c-slider-component').resetHandler();
    }
}