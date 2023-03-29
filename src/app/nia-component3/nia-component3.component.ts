import { Component } from '@angular/core';

@Component({
  selector: 'app-nia-component3',
  templateUrl: './nia-component3.component.html',
  styleUrls: ['./nia-component3.component.css']
})
export class NiaComponent3Component {
  currentRounds = 15

  fire() {
    this.currentRounds = (this.currentRounds > 0) ? this.currentRounds - 1 : 0
  }

  reload() {
    this.currentRounds = 10
  }

}
