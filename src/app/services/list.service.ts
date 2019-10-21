import {Injectable} from '@angular/core';
import {List} from '../models/list';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  lists: List[] = [];
  selectedList: BehaviorSubject<List> = new BehaviorSubject<List>(null);

  constructor() {
  }

  getLists(): Observable<List[]> {
    const lists = localStorage.getItem('lists');
    console.log(lists);
    if (lists !== null && lists !== undefined) {
      const listObjects: List[] = JSON.parse(lists);
      this.selectedList.next(listObjects[0]);
      this.lists = listObjects;
    }
    return of(this.lists);
  }

  getDefaultList() {
    if (this.lists.length > 0) {
      console.log('length');
      return this.lists[0];
    } else {
      console.log('null');
      return null;
    }
  }

  addList(list: List) {
    this.lists.push(list);
    this.selectedList.next(list);
    localStorage.setItem('lists', JSON.stringify(this.lists));
  }

  updateList(list: List) {
    this.lists = this.lists.filter(l => l !== list);
    this.lists.push(list);
    localStorage.setItem('lists', JSON.stringify(this.lists));

  }
}
