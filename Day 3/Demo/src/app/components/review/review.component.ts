import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
 //^interpolation start
  title = 'My App';
  username = 'Mahmoud';
  price = 50;
  quantity = 3;
  isArabic: boolean = true;
  getName(): string {
    return this.username;
  }

  //^interpolation end


  //^propery binding start

  imgUrl: string = "1.png"
  isAvailable = false;
  htmlContent: string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, non?"

  //^propery binding end


  //^ Style Binding start
  textColor: string = "orange"
  fontSize: number = 60;
  onSale: boolean = true
  //^ Style Dinding end

  //^ Event Binding Start

  sayHi(): void {
    alert(`Hello, ${this.username}`)
  }
  sayHi2(evnt: any): void { // PointerEvent
    console.log(evnt)
  }
  message: string = '';
  showValue(evnt: any): void {
    // try with if ,then remove it and change html to (keyup.enter)
    //if(evnt.keyCode ==13) { 

    console.log(evnt.target.value);
    this.message = evnt.target.value
    //}
  }

  showName(name: string) {
    alert("The name from input is " + name);
  }
  //^ Event Binding End


  //^ Two Way Data bindind start
  name: string = "";
  //^ Two Way Data bindind end

  //^ *ngIF & ngFor start
  //! ngIF start
  isLoggedIn: boolean = true;

  LogOut(): void {
    this.isLoggedIn = !this.isLoggedIn
  }
  LogIn(): void {
    this.isLoggedIn = !this.isLoggedIn
  }
  isLoading: boolean = true;

  //! ngIF end
  //! ngSwitch start
  role: string = "admin"
  //! ngSwitch end

  //! ngFor start
  meals: [number, string][] = [[1, "meat"], [2, "burger"], [3, "checken"]]
  trackItem(index: number, item: [number, string]) {
    return item[0]
  }

  products: any[] = [{
    name: "iPhone 15",
    description: "Latest Apple smartphone with powerful performance.",
    price: 999,
    image: "https://picsum.photos/200/300",
    link: "#"
  }, {
    name: "iPhone 15",
    description: "Latest Apple smartphone with powerful performance.",
    price: 999,
    image: "https://picsum.photos/200/300",
    link: "#"
  }, {
    name: "iPhone 15",
    description: "Latest Apple smartphone with powerful performance.",
    price: 999,
    image: "https://picsum.photos/200/300",
    link: "#"
  }, {
    name: "iPhone 15",
    description: "Latest Apple smartphone with powerful performance.",
    price: 999,
    image: "https://picsum.photos/200/300",
    link: "#"
  }, {
    name: "iPhone 15",
    description: "Latest Apple smartphone with powerful performance.",
    price: 999,
    image: "https://picsum.photos/200/300",
    link: "#"
  },
  {
    name: "iPhone 15",
    description: "Latest Apple smartphone with powerful performance.",
    price: 999,
    image: "https://picsum.photos/200/300",
    link: "#"
  },
  {
    name: "Samsung Galaxy S24",
    description: "High-end Android phone with great camera.",
    price: 899,
    image: "https://picsum.photos/200/300",
    link: "#"
  },
  {
    name: "MacBook Air M3",
    description: "Lightweight laptop with Apple's M3 chip.",
    price: 1299,
    image: "https://picsum.photos/200/300",
    link: "#"
  },
  {
    name: "Sony WH-1000XM5",
    description: "Wireless noise cancelling headphones.",
    price: 349,
    image: "https://picsum.photos/200/300",
    link: "#"
  },
  {
    name: "Apple Watch Series 9",
    description: "Smartwatch with advanced health tracking features.",
    price: 429,
    image: "https://picsum.photos/200/300",
    link: "#"
  }
  ]


  //^ *ngIF & ngFor end


  //^ Pipes
  today: Date = new Date()
  task = {
    "name": "Learn Angular",
    "done": false,
    "priority": "high"
  }
}
