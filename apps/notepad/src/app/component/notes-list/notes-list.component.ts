import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { NotesService } from '../../notes.service';
import { DialogOverviewExample } from '../dialog-overview/dialog-overview.component';
import { Note } from './note.model';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'np-notepad-input',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {
  notesList: Note[] = [];
  showModal: boolean = false;
  showColdScreen: boolean = true;
  noteEditForm: FormGroup = new FormGroup({
    editTitle: new FormControl<string | null>(''),
  });
  showDelete: boolean = false;
  currentSelectedNote!: Note;

  searchList = new FormControl(null);

  animal!: string;
  name!: string;

  constructor(private notesService: NotesService, public dialog: MatDialog) {}
  ngOnInit() {
    this.notesList = this.notesService.fetchNotes();
    this.showColdScreenFun();
  }

  onRemove(noteIndex: number) {
    this.notesList.splice(noteIndex, 1);
    localStorage.setItem('storelist', JSON.stringify(this.notesList));
    this.showColdScreenFun();
  }

  onCardClick(note: Note) {
    this.currentSelectedNote = note;
    this.showModal = true;
    this.currentSelectedNote.createdAt;
  }

  onNoteEdited(): void {
    this.showModal = false;
    this.notesList = this.notesService.fetchNotes();
    this.showColdScreenFun();
  }
  onMouseEnter() {
    this.showDelete = true;
  }
  onMouseLeave() {
    this.showDelete = false;
  }

  onChecked(e: Event, i: number, j: number) {
    e.stopPropagation();
    this.notesList[i].todoList[j].completed = (<HTMLInputElement>(
      e.target
    )).checked;

    localStorage.setItem('storelist', JSON.stringify(this.notesList));
  }
  showColdScreenFun(): void {
    if (this.notesList.length >= 1) {
      this.showColdScreen = false;
    } else {
      this.showColdScreen = true;
    }
  }

  openDialog(note: Note): void {
    this.currentSelectedNote = note;
    const dialogRef = this.dialog.open(DialogOverviewExample, {
      data: this.currentSelectedNote,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
