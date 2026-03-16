import { Component } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { Category } from '../../models/caterogy.model';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  storeName:string = 'TechStore';
  products: IProduct[] = [
    {
      id: 1,
      name: 'iPhone 15',
      price: 999,
      imageUrl: 'download.jpg',
      inStock: true,
      category: Category.Phones,
    },
    {
      id: 2,
      name: 'MacBook Pro',
      price: 1999,
      imageUrl: 'download.jpg',
      inStock: true,
      category: Category.Laptops,
    },
    {
      id: 3,
      name: 'AirPods Pro',
      price: 249,
      imageUrl: 'download.jpg',
      inStock: false,
      category: Category.Laptops,
    },
    {
      id: 4,
      name: 'Samsung Galaxy',
      price: 899,
      imageUrl: 'download.jpg',
      inStock: true,
      category: Category.Phones,
    },
  ];
}
