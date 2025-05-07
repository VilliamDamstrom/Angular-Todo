import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { Todo } from '../models/todo.model';


@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  // @Input() todo!:string;
  // @Input() id!:number;
  // @Output() doneItem = new EventEmitter<number>();

  todo = input.required<Todo>();
  doneItem = output<number>()

  itemDone() {
    this.doneItem.emit(this.todo().id);
  }   

}
