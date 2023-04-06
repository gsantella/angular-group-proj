import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-isaiah-component1',
  templateUrl: './isaiah-component1.component.html',
  styleUrls: ['./isaiah-component1.component.css']
})
export class IsaiahComponent1Component {

  jsondata:any

  constructor(private httpClient: HttpClient){}

  grabApiData() {
    this.httpClient.get("https://dog-api.kinduff.com/api/facts").subscribe( result => {
      this.jsondata = result
    }) 
  }
}
