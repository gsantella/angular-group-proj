import { Component } from '@angular/core';

@Component({
  selector: 'app-ben-component5',
  templateUrl: './ben-component5.component.html',
  styleUrls: ['./ben-component5.component.css']
})
export class BenComponent5Component {

  countries = ["Estonia", "France", "Germany", "Ireland", "Italy", "Monaco", "Nigeria", "Poland", "Russia", "Spain", "UK", "US"]
  

  newRound(){
    var correctFlag = this.pickFlag()
  }

  pickFlag(){
  var min = Math.ceil(this.countries.length)
  var max = Math.floor(0)
  var shuffleFlag = Math.floor(Math.random() * (max - min + 1) + min)
  //var rightIndex = Math.floor(Math.random() * (2 - 0 + 1) + 0)
  //var wrong1 = this.loadFlags(this.countries, shuffleFlag)
  //var wrong2 = this.loadFlags(this.countries, shuffleFlag)
  return shuffleFlag
  }

  loadFlags(countryList:string[], correctFlag:any){
    var wrongFlagList = countryList.splice(countryList.indexOf(correctFlag, 1))
  var min = Math.ceil(wrongFlagList.length)
  var max = Math.floor(0)
  var wrongFlag = Math.floor(Math.random() * (max - min + 1) + min)
  return wrongFlag
  }

  flagPics(){
    
  }
}
