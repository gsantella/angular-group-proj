import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { compileDeclareInjectableFromMetadata } from '@angular/compiler';

@Component({
  selector: 'app-steven-component1',
  templateUrl: './steven-component1.component.html',
  styleUrls: ['./steven-component1.component.css']
})
export class StevenComponent1Component implements OnInit, OnDestroy {

  jsonData:any
  id:any

  constructor(private httpClient: HttpClient){}

  getAPuppers() {
    this.httpClient.get('https://dog.ceo/api/breeds/image/random').subscribe( res => {
      this.jsonData = res
    })

  }

  ngOnInit() {
    this.getAPuppers();
    this.id = setInterval(() => {
      this.getAPuppers(); 
    }, 1000000);
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

}
