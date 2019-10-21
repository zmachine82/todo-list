import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {List} from '../models/list';
import {Todo} from '../models/todo';
import {ListService} from '../services/list.service';
import {ResponsiveService} from '../services/responsive.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title = 'Git Organized';
  list: List;
  isMobile = false;

  @Output() menu: EventEmitter<any> = new EventEmitter<any>();

  constructor(private listService: ListService, private responsiveService: ResponsiveService) {
  }

  ngOnInit(): void {
    this.onResize();
    this.responsiveService.checkWidth();
    this.listService.selectedList.subscribe(data => {
      if (data !== null) {
        this.list = data;
      } else {
        this.list = this.listService.getDefaultList();
      }
    });
  }

  onResize() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }

  saveTodo(todo: Todo) {
    todo.editing = false;
    this.listService.updateList(this.list);
  }

  addNewTodo() {
    this.list.todos.push(new Todo('', true));
    this.listService.updateList(this.list);
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
    this.listService.updateList(this.list);
  }

  deleteTodo(todo: Todo) {
    if (confirm('Are you sure you want to delete?')) {
      this.list.todos = this.list.todos.filter(t => t !== todo);
      this.listService.updateList(this.list);
    }
  }

  toggleMenu() {
    this.menu.emit();
  }

}
