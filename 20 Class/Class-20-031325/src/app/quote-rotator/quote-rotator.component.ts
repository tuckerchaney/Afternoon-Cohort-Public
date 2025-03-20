import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-quote-rotator',
  imports: [],
  templateUrl: './quote-rotator.component.html',
  styleUrl: './quote-rotator.component.css',
})
export class QuoteRotatorComponent {
  quotes = signal(['this is quote 1', 'this is quote 2', 'this is quote 3']);
  currentQuote = signal(this.quotes()[0]);
  nextQuote() {
    const currentIndex = this.quotes().indexOf(this.currentQuote());
    const nextIndex = (currentIndex + 1) % this.quotes().length;
    this.currentQuote.set(this.quotes()[nextIndex]);
  }
}
