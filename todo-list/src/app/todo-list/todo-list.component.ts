import { Component, signal } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { todos } from '../todos'; 

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  // todos = todos.filter(t => !t.done);
  todos = signal(todos.filter(t => !t.done));

  itemDone(id: number) {
    console.log("Klick på item comp ", id);

    
  }
}
