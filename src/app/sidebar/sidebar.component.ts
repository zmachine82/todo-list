import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {List} from '../models/list';
import {ListService} from '../services/list.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  lists: List[] = [];
  @Output() menu: EventEmitter<any> = new EventEmitter<any>();

  constructor(private listService: ListService) {
  }

  ngOnInit() {
    this.listService.getLists().subscribe(data => {
      if (data) {
        this.lists = data;
      }
    });
  }

  setActiveList(list: List) {
    this.listService.selectedList.next(list);
    this.menu.emit();
  }

}
