import { Component } from '@angular/core';
//import { NgModule } from '@angular/core';

@Component({
  selector: 'app-ben-component3',
  templateUrl: './ben-component3.component.html',
  styleUrls: ['./ben-component3.component.css']
})
export class BenComponent3Component {
  benput:String = "Insert Pounds Here!"
  getKilos(){
    alert(`${this.benput} pounds is ${ Number(this.benput)*0.453592} kilograms!`)
  }
}
