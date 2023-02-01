import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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
  showColdScreen: boolean = true;
  noteEditForm: FormGroup = new FormGroup({
    editTitle: new FormControl<string | null>(''),
  });
  showDelete: boolean = false;
  currentSelectedNote!: Note;

  searchList = new FormControl(null);

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
    this.currentSelectedNote.createdAt;
  }

  onNoteEdited(): void {
    this.notesList = this.notesService.fetchNotes();
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
      width: '25%',
      height: 'h-screen',
    });

    const sub = dialogRef.componentInstance.noteEdited.subscribe((res: any) => {
      this.notesList = this.notesService.fetchNotes();
      dialogRef.close();
    });

    dialogRef.afterClosed().subscribe((result) => {
      sub.unsubscribe();
    });
  }
}
