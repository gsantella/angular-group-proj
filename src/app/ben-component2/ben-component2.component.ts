import { Component } from '@angular/core';

@Component({
  selector: 'app-ben-component2',
  templateUrl: './ben-component2.component.html',
  styleUrls: ['./ben-component2.component.css']
})
export class BenComponent2Component {
dataForTextBox:String = "I like oreos :D"

onButton1(){
  alert(`value of dataForTextBox = ${this.dataForTextBox}`)
}
}
