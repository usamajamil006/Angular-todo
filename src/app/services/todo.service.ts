import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(){
    return [
      {
        id: 1,
        title: "alo le lo",
        completed: false
      },
      {
        id: 2,
        title: "aloo le ",
        completed: false
      },
      {
        id: 3,
        title: "aloo  lo",
        completed: true
      }
    ];
  }
}
