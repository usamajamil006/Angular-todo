import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "src/app/models/Todo";
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  setClass() {
    let classes = {
      todo: true,
      "is-complete": this.todo.completed
    };

    return classes;
  }

  onToggle(todo) {
    // Update in UI
    todo.completed = !todo.completed;
    // console.log("todo is T",todo)
    // Update in Server
    this.todoService.toggleCompleted(todo).subscribe(todo =>{
      console.log(todo)
    })
  }

  onDelete(todo) {
    console.log("todo is D", todo);
  }
}
