import { Component } from '@angular/core';

@Component({
  selector: 'app-guido-component1',
  templateUrl: './guido-component1.component.html',
  styleUrls: ['./guido-component1.component.css']
})
export class GuidoComponent1Component {
  
  // data for TextBox
  dataForTextBox:String = "cheese sandwich"

  onButton1() {
    alert(`value of dataForTextBox = ${this.dataForTextBox}`)
  }

}
