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
  correctFlag = Math.floor(Math.random() * (this.max - this.min + 1) + this.min)
wrong1 = ""
wrong2= ""

  pickFlag(){
  //var rightIndex = Math.floor(Math.random() * (2 - 0 + 1) + 0)
  //var wrong1 = this.loadFlags(this.countries, shuffleFlag)
  //var wrong2 = this.loadFlags(this.countries, shuffleFlag)
  
  this.correctFlag = Math.floor(Math.random() * (this.max - this.min + 1) + this.min)
  //return this.countries[this.shuffleFlag]

  return this.correctFlag
  }

  resetOptions(){
    var wrongFlagList = this.countries.splice(this.countries.indexOf(String(this.correctFlag), 1))
    this.wrong1 = wrongFlagList[Math.floor(Math.random()*wrongFlagList.length)]
    this.wrong2 = wrongFlagList[Math.floor(Math.random()*wrongFlagList.length)]
  }

loadAnswersStr(Flag:String){
  switch (Flag){
    case "Estonia":
      return "Estonia"
    case "France":
      return "France"
    case "Germany":
      return "Germany"
    case "Ireland":
      return "Ireland"
    case "Italy":
      return "Italy"
    case "Monaco":
      return "Monaco"
    case "Nigeria":
      return "Nigeria"
    case "Poland":
      return "Poland"
    case "Russia":
      return "Russia"
    case "Spain":
      return "Spain"
    case "UK":
      return "UK"
    case "US":
      return "US"
  }
  return "Error"
}
loadAnswers(Flag:number){
  switch (Flag){
    case 0:
      return "Estonia"
    case 1:
      return "France"
    case 2:
      return "Germany"
    case 3:
      return "Ireland"
    case 4:
      return "Italy"
    case 5:
      return "Monaco"
    case 6:
      return "Nigeria"
    case 7:
      return "Poland"
    case 8:
      return "Russia"
    case 9:
      return "Spain"
    case 10:
      return "UK"
    case 11:
      return "US"
  }
  return "Error"
}

  loadFlags(Flag:String){
  switch (Flag){
    case "Estonia":
      return "assets/Estonia@3x.png"
    case "France":
      return "assets/France@3x.png"
    case "Germany":
      return "assets/Germany@3x.png"
    case "Ireland":
      return "assets/Ireland@3x.png"
    case "Italy":
      return "assets/Italy@3x.png"
    case "Monaco":
      return "assets/Monaco@3x.png"
    case "Nigeria":
      return "assets/Nigeria@3x.png"
    case "Poland":
      return "assets/Poland@3x.png"
    case "Russia":
      return "assets/Russia@3x.png"
    case "Spain":
      return "assets/Spain@3x.png"
    case "UK":
      return "assets/UK@3x.png"
    case "US":
      return "assets/US@3x.png"
  }

  return Flag
  }

  getAnswers(){
    var option1 = document.getElementById("choice1") as HTMLElement
    option1.innerText=this.loadAnswers(this.correctFlag)
    var option2 = document.getElementById("choice2") as HTMLElement
    option2.innerText=this.loadAnswers(this.correctFlag)
    var option3 = document.getElementById("choice3") as HTMLElement
    option3.innerText=this.loadAnswers(this.correctFlag)
  }

  guessTheFlag(){
    
  var countries = ["Estonia", "France", "Germany", "Ireland", "Italy", "Monaco", "Nigeria", "Poland", "Russia", "Spain", "UK", "US"]
  
    for (let i = countries.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [countries[i], countries[j]] = [countries[j], countries[i]]
    }
    var flagPic = document.getElementById("flagPicture") as HTMLImageElement
    flagPic.src = `../../assets/$(countries[0])@3x.png`

    var correctAnswer = document.getElementById("choice1") as HTMLElement
    correctAnswer.innerText = countries[1]
    var wrong1 = document.getElementById("choice2") as HTMLElement
    wrong1.innerText = countries[2]
    var wrong2 = document.getElementById("choice3") as HTMLElement
    wrong2.innerText = countries[3]
  }
}
