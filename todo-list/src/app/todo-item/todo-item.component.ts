import { Component, input, Input } from '@angular/core';

interface todo {
  id: number;
  todo: string;
  done: boolean;
}

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

  todo = input.required<todo>();
}
