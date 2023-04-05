import { Component } from '@angular/core';

@Component({
  selector: 'app-nia-component2',
  templateUrl: './nia-component2.component.html',
  styleUrls: ['./nia-component2.component.css']
})
export class NiaComponent2Component {

  dataForTextBox: String = "Hi"

  onButton1(){
    alert(`value of datForTextBox = ${this.dataForTextBox}`)
  }
}
