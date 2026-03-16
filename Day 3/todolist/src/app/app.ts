import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { TaskList } from "./components/task-list/task-list";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [TaskList, Footer,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todolist');
}
