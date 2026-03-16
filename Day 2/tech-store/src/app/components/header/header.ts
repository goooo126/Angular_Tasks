import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  storeName:string = 'TechStore';
  logoUrl:string = 'logo.png';
  customerName:string = 'Geroge Adly'
}
