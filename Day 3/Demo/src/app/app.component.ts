import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, HeaderComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'app1';
  userName:string="Mahmoud";
  price:number=100;
  qty:number=20;
  isArabic:boolean=true;
  getName():string{
    return this.userName;
  }


  // ^ Property Binding
  imgUrl:string="1.png";
  isAvailable:boolean=true;
  htmlContent:string="I am just a text"


  //^ Style Binding
  orange:string="orange"
  fontSize:number=40


  sayHi(evnt:any):void{
    console.log(evnt);
  }
inpVal:string="";
sayHi2(evt:any):void{
  //if(evt.keyCode == 13)
    console.log(evt.target.value);
  this.inpVal=evt.target.value
}


preview(inp:any){
  alert(inp)
}

inpVal2:string="2"




isLoggedIn:boolean=true

logOut():void{
  this.isLoggedIn=false;
}
logIn():void{
    this.isLoggedIn=true;

}
dataLoaded:boolean=false


role:string='Usery'


meals:[number,string][]=[
  [1,"Chicken"],
  [2,"Meat"],
  [3,"Burger"],
]

trackItem(index:number,item:[number,string]){
  return item[0]
}


today:Date=new Date()
dueDate: Date = new Date();

task={
  id:333,
  name:"mahmoud",
}

}
