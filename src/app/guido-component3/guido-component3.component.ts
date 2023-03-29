import { Component } from '@angular/core';

@Component({
  selector: 'app-guido-component3',
  templateUrl: './guido-component3.component.html',
  styleUrls: ['./guido-component3.component.css']
})
export class GuidoComponent3Component {
  currentRounds = 15

  fire() {
    this.currentRounds = (this.currentRounds > 0) ? this.currentRounds - 1 : 0
  }

  reload() {
    this.currentRounds = 10
  }

}
