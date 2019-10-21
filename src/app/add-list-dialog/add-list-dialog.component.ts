import {Component, OnInit} from '@angular/core';
import {List} from '../models/list';
import {MatDialogRef} from '@angular/material';
import {Todo} from '../models/todo';

@Component({
  selector: 'app-add-list-dialog',
  templateUrl: './add-list-dialog.component.html',
  styleUrls: ['./add-list-dialog.component.scss']
})
export class AddListDialogComponent implements OnInit {

  newList: List = new List();

  constructor(public dialogRef: MatDialogRef<AddListDialogComponent>) {
  }

  ngOnInit() {
  }

  saveTodo() {
    if (this.newList.name !== undefined && this.newList.name.trim().length > 0) {
      this.newList.todos = [new Todo('First Todo')];
      this.dialogRef.close(this.newList);
    } else {
      this.onNoClick();
    }
  }

  cancelTodo() {
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
