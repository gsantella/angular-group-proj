import { Component } from '@angular/core';

@Component({
  selector: 'app-steven-component3',
  templateUrl: './steven-component3.component.html',
  styleUrls: ['./steven-component3.component.css']
})
export class StevenComponent3Component {
  dataForTextBox:String = "cheese sandwich"

  onButton1(){
    alert(`value of data for text box = ${this.dataForTextBox}`)
  }
}
