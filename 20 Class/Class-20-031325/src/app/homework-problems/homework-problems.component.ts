import { Component } from '@angular/core';

@Component({
  selector: 'app-homework-problems',
  imports: [],
  templateUrl: './homework-problems.component.html',
  styleUrl: './homework-problems.component.css',
})
export class HomeworkProblemsComponent {
  currentCount = 0;
  addOne() {
    const newCount = this.currentCount + 1;
    this.currentCount = newCount;
  }
}
