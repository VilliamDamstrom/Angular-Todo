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
  todo = todos[this.getNewRandomTodo()];

  getNewRandomTodo() {
    const todo = Math.floor(Math.random() * todos.length);
    this.todo = todos[todo];
    return todo;
  }
}
