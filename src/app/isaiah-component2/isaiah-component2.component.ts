import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-isaiah-component2',
  templateUrl: './isaiah-component2.component.html',
  styleUrls: ['./isaiah-component2.component.css']
})
export class IsaiahComponent2Component {
  @Input() total: number = 0;
  add(value1: string, value2: string) {
    this.total = parseInt(value1) + parseInt(value2)
  }
}
