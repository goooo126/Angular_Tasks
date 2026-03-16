import { Component } from '@angular/core';
import { Task } from '../../models/task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  constructor(){
    this.filter()
  }


  tasks:Task[]=[
    {id:1,name:"Angular Course", description:"ay 7aga",done:true,priority:'high',dueDate:'2026-03-22'},
    {id:2,name:"Js Course", description:"ay 7aga",done:false,priority:'low',dueDate:'2026-03-22'},
    {id:3,name:"Css Course", description:"ay 7aga",done:true,priority:'medium',dueDate:'2026-03-22'},
    {id:4,name:"TS Course", description:"ay 7aga",done:false,priority:'low',dueDate:'2026-03-22'},
    {id:5,name:"Node Course", description:"ay 7aga",done:true,priority:'high',dueDate:'2026-03-22'},
  ]


addTask(name:string):void{
    

  let task:Task={id:Math.round(Math.random()*100)
    ,name:name, description:"ay 7aga",done:true,priority:'high',dueDate:'2026-03-22'}
  this.tasks.push(task)
}

  toggleDone(id:number):void{
    let task=this.tasks.find(t=>t.id==id)
    if(task) task.done=!task.done;
  }


  deleteTask(id:number):void{
    this.tasks=this.tasks.filter(t=>t.id!==id)
  }


  selectedPriority:string="all";
  filteredTasks:Task[]=[]

  filter():void{
    if(this.selectedPriority==='all') 
      this.filteredTasks=this.tasks;
    else
      this.filteredTasks=this.tasks.filter(
    t=>t.priority === this.selectedPriority
  )
  }
}
