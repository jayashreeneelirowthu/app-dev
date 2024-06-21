import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {
  searchQuery: string = '';
  products = [
    { name: 'Red Dress', price: 49.99 },
    { name: 'Blue Shirt', price: 29.99 },
    { name: 'Black Shoes', price: 69.99 }
  ];

  search(): void {
    console.log('Searching for:', this.searchQuery);
  }
}
