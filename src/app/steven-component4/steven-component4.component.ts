import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-steven-component4',
  templateUrl: './steven-component4.component.html',
  styleUrls: ['./steven-component4.component.css']
})
export class StevenComponent4Component {

  title = "Random Beer Generator"
  jsonData:any

  constructor(private httpClient: HttpClient){}

  grabAPIData() {
    this.httpClient.get(`https://api.punkapi.com/v2/beers/${this.getRandomNumber()}`).subscribe( res => {
      this.jsonData = res
    })

  }
    
  getRandomNumber() {
    return Math.floor(Math.random() * 25)
  }
}
