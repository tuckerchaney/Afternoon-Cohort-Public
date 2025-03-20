import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products = signal([
    { name: 'laptop', price: 999 },
    { name: 'car', price: 998 },
    { name: 'pc', price: 997 },
  ]);
}
