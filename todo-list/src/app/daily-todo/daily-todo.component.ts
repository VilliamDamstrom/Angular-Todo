import { Component } from '@angular/core';
import { todos } from '../todos';

@Component({
  selector: 'app-daily-todo',
  standalone: true,
  imports: [],
  templateUrl: './daily-todo.component.html',
  styleUrl: './daily-todo.component.css'
})
export class DailyTodoComponent {
  todos = todos;
}
