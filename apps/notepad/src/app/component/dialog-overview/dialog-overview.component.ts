import { Component, EventEmitter, Inject, Output } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { DialogData } from '../notes-list/notes-list.component';

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'dialog-overview.component.html',
})
export class DialogOverviewExample {
  @Output() noteEdited: EventEmitter<null> = new EventEmitter<null>();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {}

  onNoteEdited() {
    this.noteEdited.emit(null);
  }
}
