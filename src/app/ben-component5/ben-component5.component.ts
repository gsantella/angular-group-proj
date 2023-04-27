import { Component } from '@angular/core';

@Component({
  selector: 'app-ben-component5',
  templateUrl: './ben-component5.component.html',
  styleUrls: ['./ben-component5.component.css']
})
export class BenComponent5Component {

  countries = ["Estonia", "France", "Germany", "Ireland", "Italy", "Monaco", "Nigeria", "Poland", "Russia", "Spain", "UK", "US"]
  
  min = Math.ceil(this.countries.length)
  max = Math.floor(0)
  shuffleFlag = Math.floor(Math.random() * (this.max - this.min + 1) + this.min)

  newRound(){
    var correctFlag = this.pickFlag()
  }

  pickFlag(){
  //var rightIndex = Math.floor(Math.random() * (2 - 0 + 1) + 0)
  //var wrong1 = this.loadFlags(this.countries, shuffleFlag)
  //var wrong2 = this.loadFlags(this.countries, shuffleFlag)
  
  this.shuffleFlag = Math.floor(Math.random() * (this.max - this.min + 1) + this.min)
  return this.shuffleFlag
  }

  loadFlags(countryList:string[]){
    var wrongFlagList = countryList.splice(countryList.indexOf(String(this.shuffleFlag), 1))
  var min = Math.ceil(wrongFlagList.length)
  var max = Math.floor(0)
  var wrongFlag = Math.floor(Math.random() * (max - min + 1) + min)
  switch (wrongFlag){
    case 0:
      return "assets/Estonia@3x.png"
    case 1:
      return "assets/France@3x.png"
    case 2:
      return "assets/Germany@3x.png"
    case 3:
      return "assets/Ireland@3x.png"
    case 4:
      return "assets/Italy@3x.png"
    case 5:
      return "assets/Monaco@3x.png"
    case 6:
      return "assets/Nigeria@3x.png"
    case 7:
      return "assets/Poland@3x.png"
    case 8:
      return "assets/Russia@3x.png"
    case 9:
      return "assets/Spain@3x.png"
    case 10:
      return "assets/UK@3x.png"
    case 11:
      return "assets/US@3x.png"
  }

  return wrongFlag
  }

  flagPics(){
    
  }
}
