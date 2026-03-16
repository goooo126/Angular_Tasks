import { Component } from '@angular/core';
import { ICaterogy } from '../../models/icaterogy';
import { IProduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule,CurrencyPipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  constructor() {
    this.filter();
  }

  categories: ICaterogy[] = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Clothing' },
    { id: 3, name: 'Books' },
  ];

  products: IProduct[] = [
    { id: 1, name: 'iPhone 15 Pro', price: 1299, quantity: 5, categoryId: 1, date: '2026-03-17' },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      price: 999,
      quantity: 1,
      categoryId: 1,
      date: '2026-03-16',
    },
    { id: 3, name: 'MacBook Pro M3', price: 2499, quantity: 3, categoryId: 1, date: '2026-03-15' },
    { id: 4, name: 'Sony WH-1000XM5', price: 349, quantity: 0, categoryId: 1, date: '2026-03-14' },
    { id: 5, name: 'Nike Air Max', price: 180, quantity: 12, categoryId: 2, date: '2026-03-10' },
    {
      id: 6,
      name: "Levi's 501 Jeans",
      price: 69.99,
      quantity: 8,
      categoryId: 2,
      date: '2026-03-12',
    },
    { id: 7, name: 'Clean Code', price: 44.99, quantity: 20, categoryId: 3, date: '2026-02-28' },
    {
      id: 8,
      name: 'Angular in Action',
      price: 39.99,
      quantity: 0,
      categoryId: 3,
      date: '2026-01-15',
    },
  ];

  selectedCategory: string = 'all';
  filteredProducts: IProduct[] = [];

  filter(): void {
    if (this.selectedCategory === 'all') {
      this.filteredProducts = [...this.products];
    } else {
      const category = this.categories.find((c) => c.name === this.selectedCategory);

      if (category) {
        this.filteredProducts = this.products.filter((p) => p.categoryId === category.id);
      } else {
        this.filteredProducts = [];
      }
    }
  }
  
  getCategoryName(id: number): string {
    const category = this.categories.find((c) => c.id === id);
    return category ? category.name : 'Unknown';
  }

  buyProduct(product: IProduct): void {
  if (product.quantity > 0) {
    product.quantity -= 1;
  }
}
}
