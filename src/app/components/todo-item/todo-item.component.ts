import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "src/app/models/Todo";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() {}

  ngOnInit() {}

  setClass() {
    let classes = {
      todo: true,
      "is-complete": this.todo.completed
    };

    return classes;
  }

  onToggle(todo) {
    todo.completed = !todo.completed;
    // console.log("todo is T",todo)
  }

  onDelete(todo) {
    console.log("todo is D", todo);
  }
}
