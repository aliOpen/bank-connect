import { Component, Inject } from '@angular/core';
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
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {}
}

// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'dialog-overview-example-dialog.html',
// })
// export class DialogOverviewExampleDialog {
//   openDialog() {
//     throw new Error('Method not implemented.');
//   }
//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData
//   ) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }
