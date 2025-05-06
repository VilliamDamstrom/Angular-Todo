import { Component } from "@angular/core";
import { DailyTodoComponent } from "../daily-todo/daily-todo.component";

@Component({
    selector: "app-header",
    standalone: true,
    imports: [DailyTodoComponent],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.css"
})

export class HeaderComponent {

}