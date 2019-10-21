import { Component, OnInit } from '@angular/core';
import {List} from '../models/list';
import {Todo} from '../models/todo';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title = 'Git Organized';
  list: List;

  constructor() {
  }

  ngOnInit(): void {
    this.list = new List();
    this.list.name = 'YARDWORK';
    this.list.todos = [new Todo('Wow'), new Todo('Rake Leaves')];
  }

  saveTodo(todo: Todo) {
    todo.editing = false;
  }

  addNewTodo() {
    this.list.todos.push(new Todo('', true));
  }

  cancelTodo(todo: Todo) {
    if (todo.task.trim().length === 0) {
      this.deleteTodo(todo);
    } else {
      todo.editing = false;
    }
  }

  updateCheck(todo: Todo) {
    todo.completed = !todo.completed;
    if (todo.completed) {
      this.list.todos = this.list.todos.filter(t => t !== todo);
      this.list.todos.push(todo);
    }
  }

  deleteTodo(todo: Todo) {
    if (confirm('Are you sure you want to delete?')) {
      this.list.todos = this.list.todos.filter(t => t !== todo);
    }
  }

}
