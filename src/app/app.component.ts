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

  addTodo() {
    this.list.todos.push(this.newTodo);
    this.newTodo = new Todo('');
    this.adding = false;
  }

  displayTodoInput() {
    this.adding = true;
  }

  cancelTodo() {
    this.adding = false;
    this.newTodo.task = '';
  }
}
