import { computed, Injectable, signal } from '@angular/core';
import { todos } from './todos';

// Dependency Injection, one servie we use in all components
@Injectable({
    providedIn: 'root'
})

export class TodosService {
    todos = signal(todos);

    // Computable value, filter value before sending it to the component
    filteredTodos = computed(() => this.todos().filter(t => !t.done));

    getAllTodos() {
        return this.filteredTodos;
    }

    // Add new todo to the list, array of objects, create new array
    addNewTodo(todo: string) {
        const newTodo = {
            id: this.todos().length + 1,
            todo: todo,
            done: false
        }

        const newTodos = [...this.todos(), newTodo];
        this.todos.set(newTodos);
    }

    completeTodo(id: number) {

        const newTodos = this.todos().map(todo =>
            todo.id == id ? {...todo, done:true} : todo
          );
      
          this.todos.set(newTodos);
    }
}