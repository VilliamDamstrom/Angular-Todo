import { Component, signal } from '@angular/core';
import { todos } from '../todos';

@Component({
  selector: 'app-daily-todo',
  standalone: true,
  imports: [],
  templateUrl: './daily-todo.component.html',
  styleUrl: './daily-todo.component.css'
})
export class DailyTodoComponent {
    todo = signal(todos[this.getNewRandomTodo()]);
  //todo = todos[this.getNewRandomTodo()];

  getNewRandomTodo() {
    const todo = Math.floor(Math.random() * todos.length);
    return todo;
  }


  showNewRandomTodo() {
    const todo = this.getNewRandomTodo();
    this.todo.set(todos[todo]);
  }
}

