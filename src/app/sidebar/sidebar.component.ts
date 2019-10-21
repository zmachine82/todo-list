import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {List} from '../models/list';
import {ListService} from '../services/list.service';
import {MatDialog} from '@angular/material';
import {AddListDialogComponent} from '../add-list-dialog/add-list-dialog.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  lists: List[] = [];
  @Output() menu: EventEmitter<any> = new EventEmitter<any>();

  constructor(private listService: ListService, public dialog: MatDialog) {
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

  openAddList() {
    const dialogRef = this.dialog.open(AddListDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe((result: List) => {
      if (result !== null && result !== undefined) {
        this.listService.addList(result);
      }
    });
  }

}
