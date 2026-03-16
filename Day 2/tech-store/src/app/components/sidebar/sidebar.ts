import { Component } from '@angular/core';
import { Category } from '../../models/caterogy.model';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  categories:Category[] = [Category.Phones, Category.Laptops, Category.Accessories];

}
