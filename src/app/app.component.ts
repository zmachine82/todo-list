import { Component, OnInit } from '@angular/core';
import { List } from './models/list';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Git Organized';
  list: List;
  adding = false;
  newTodo: Todo = new Todo('');

  constructor() {}

  ngOnInit(): void {
    this.list = new List();
    this.list.name = 'YARDWORK';
    this.list.todos = [new Todo('Wow'), new Todo('Rake Leaves')];
  }

  saveTodo(todo: Todo) {
    this.list.todos.filter(t => t === todo).map(to => {
      to.task = todo.task;
      to.editing = false;
    });  
  }

  addNewTodo() {
    this.list.todos.push(new Todo('New Task', true));
  }

  cancelTodo(todo: Todo) {
    this.list.todos.filter(t => t === todo).map(to => {
      to.editing = false;
    });  
  }
}
