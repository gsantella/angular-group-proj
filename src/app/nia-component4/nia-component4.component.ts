import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nia-component4',
  templateUrl: './nia-component4.component.html',
  styleUrls: ['./nia-component4.component.css']
})
export class NiaComponent4Component {
  joke:any

  constructor(private httpClient: HttpClient){}

  getjoke() {
    this.httpClient.get("https://v2.jokeapi.dev/joke/Any?safe-mode").subscribe( res => {
      this.joke = res
    })
  }
}
