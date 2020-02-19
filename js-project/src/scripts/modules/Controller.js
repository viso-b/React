import Slider from './Slider/Slider';




export default class Controller{
    constructor(){
        this.root = document.querySelector('#slider-advertising')
       console.log(this.root)

        this.slider = new Slider(this.root);
    }
  
}