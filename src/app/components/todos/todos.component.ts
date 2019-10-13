import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/Todo";
import { TodoService } from "src/app/services/todo.service";
@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    //Remove From UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    //Remove From Server
    this.todoService.deleteTodo(todo).subscribe();
    console.log("delete me");
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todoid => {
      todo.id = todoid
      console.log(todo)
      this.todos.push(todo);
    });
  }
}
