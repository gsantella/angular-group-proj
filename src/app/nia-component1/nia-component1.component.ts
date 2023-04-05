import { Component} from '@angular/core';

@Component({
  selector: 'app-nia-component1',
  templateUrl: './nia-component1.component.html',
  styleUrls: ['./nia-component1.component.css']
})
export class NiaComponent1Component {

  celTemp: number;
  farTemp: number;


  alert1() {
    window.alert('Input a temp in celcius and hit submit to see it in fahrenheit!');
  }
 
 
  alert2() {
    window.alert('Input a temp in fahrenheit and hit submit to see it in celcius!');
  }
 
 
  cToF(){
    this.farTemp = this.celTemp * (9/5) + 32;
  }
 
 
  fToC(){
    this.celTemp = (this.farTemp - 32) * (5/9);
 
  }
 

}
