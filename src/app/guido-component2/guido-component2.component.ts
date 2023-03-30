import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-guido-component2',
  templateUrl: './guido-component2.component.html',
  styleUrls: ['./guido-component2.component.css']
})
export class GuidoComponent2Component {
  
  constructor(private httpClient: HttpClient){}

  grabDataFromAPIWrongWay() {
    this.httpClient.get("http://ip-api.com/json/").subscribe( res => {
      console.log(res)
    })
  }
}
