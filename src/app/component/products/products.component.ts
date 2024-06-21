import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
   products = [
    { title: "Adam", price: 5000 },
    { title: "Noah", price: 8000 },
    { title: "ashu", price: 7000 },
     ];
}
