import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  count = 0;

  addOne() {
    this.count = this.count + 1;
  }
  subtractOne() {
    this.count = this.count - 1;
  }
}
