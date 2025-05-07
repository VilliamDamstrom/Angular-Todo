import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-todo-form.component.html',
  styleUrl: './new-todo-form.component.css'
})
export class NewTodoFormComponent {

}
