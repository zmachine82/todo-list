import { Injectable } from '@angular/core';
import {List} from '../models/list';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Todo} from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  lists: List[] = [];
  selectedList: BehaviorSubject<List> = new BehaviorSubject<List>(null);

  constructor() {
    const list = new List();
    list.name = 'YARDWORK';
    list.todos = [new Todo('Wow'), new Todo('Rake Leaves')];
    this.lists.push(list);

    const list2 = new List();
    list2.name = 'INSIDE STUFF';
    list2.todos = [new Todo('Amazing'), new Todo('Cook Dinner')];
    this.lists.push(list2);
  }

  getLists(): Observable<List[]> {
    return of(this.lists);
  }

  getDefaultList() {
    return this.lists[0];
  }

}
