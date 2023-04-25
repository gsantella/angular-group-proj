import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let btn = document.getElementById('ShibeSummoner')
let image = document.getElementById('locOfPic')
btn?.addEventListener('click', function() {
  fetch("http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true")
    .then(res => res.json())
    .then(result => {
      console.log(result)
      //image.src = result.message
    })
    .catch(err=>console.log(err))
})

@Component({
  selector: 'app-ben-component4',
  templateUrl: './ben-component4.component.html',
  styleUrls: ['./ben-component4.component.css']
})
export class BenComponent4Component {
  //pictureOfAShibe:any
somethingToDo:any
  constructor(private httpClient:HttpClient){}
//shibePics(){
//this.pictureOfAShibe = this.httpClient.get("http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true")
//}

getHobby(){
this.httpClient.get("http://www.boredapi.com/api/activity/").subscribe( res =>{ 
  this.somethingToDo = res
})
}

}
