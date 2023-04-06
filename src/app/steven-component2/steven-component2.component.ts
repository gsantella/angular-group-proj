import { Component } from '@angular/core';



@Component({
  selector: 'app-steven-component2',
  templateUrl: './steven-component2.component.html',
  styleUrls: ['./steven-component2.component.css']
})
export class StevenComponent2Component {
  title = 'Celsius to Fahrenheit Converter';
  displayTemp = 'Your results will be displayed here.'
  
  getTemp(celsius: string){
    let fahrenheit = Number(celsius) * (9 / 5) + 32
    this.displayTemp = celsius + " degrees Celsius is " + fahrenheit + " degrees in Fahrenheit."
  }
}
