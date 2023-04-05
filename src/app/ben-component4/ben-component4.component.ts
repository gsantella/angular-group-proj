import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ben-component4',
  templateUrl: './ben-component4.component.html',
  styleUrls: ['./ben-component4.component.css']
})
export class BenComponent4Component {
  pictureOfAShibe:any
  constructor(private httpClient:HttpClient){}
shibePics(){
this.pictureOfAShibe = this.httpClient.get("http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true")

}
}
