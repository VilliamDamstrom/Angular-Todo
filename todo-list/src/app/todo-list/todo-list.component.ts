import { Component, inject, signal } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { todos } from '../todos';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  // todos = todos.filter(t => !t.done);
  // todos = signal(todos.filter(t => !t.done));

  // constructor(private todosService: TodosService) {
  // }

  todosService = inject(TodosService);
  todos = this.todosService.getAllTodos();

  itemDone(id: number) {
    this.todosService.completeTodo(id);
  //  console.log("Klick på item comp ", id);

  //  const newTodos = this.todos().map(todo =>
  //    todo.id == id ? { ...todo, done: true } : todo
  //  ).filter(t => !t.done);

   // this.todos.set(newTodos);
  }
  
}
