import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { QuoteRotatorComponent } from './quote-rotator/quote-rotator.component';
import { producerAccessed } from '@angular/core/primitives/signals';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeworkProblemsComponent } from './homework-problems/homework-problems.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FavColorsComponent } from './fav-colors/fav-colors.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    QuoteRotatorComponent,
    ProductCardComponent,
    ProductListComponent,
    HomeworkProblemsComponent,
    TaskListComponent,
    FavColorsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Class-20-031325';
}
