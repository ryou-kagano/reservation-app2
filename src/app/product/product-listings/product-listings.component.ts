import { Component } from '@angular/core';
import { products } from '../../products';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrl: './product-listings.component.scss'
})
export class ProductListComponent {
  products: any;

  constructor() {}

  ngOnInit() {
    this.products = products;
  }
}
