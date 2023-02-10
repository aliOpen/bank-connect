import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NotesService } from '../../notes.service';
import { NoteComponent } from '../note/note.component';
import { Note } from './note.model';

@Component({
  selector: 'np-notepad-input',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {
  notesList: Note[] = [];
  noteEditForm: FormGroup = new FormGroup({
    editTitle: new FormControl<string | null>(''),
  });
  currentSelectedNote!: Note;
  dialogRef!: MatDialogRef<any>;
  searchList = new FormControl(null);
  constructor(private notesService: NotesService, public dialog: MatDialog) {}
  ngOnInit() {
    this.notesList = this.notesService.fetchNotes();
  }

  onRemove(noteIndex: number) {
    this.notesList.splice(noteIndex, 1);
    this.notesService.saveNote(this.notesList);
    // localStorage.setItem('storelist', JSON.stringify(this.notesList));
  }

  onChecked(e: Event, i: number, j: number) {
    e.stopPropagation();
    this.notesList[i].todoList[j].completed = (<HTMLInputElement>(
      e.target
    )).checked;

    this.notesService.saveNote(this.notesList);
    // localStorage.setItem('storelist', JSON.stringify(this.notesList));
  }

  openDialog(note: Note | undefined = undefined): void {
    if (note) {
      this.currentSelectedNote = note;
    }

    this.dialog
      .open(NoteComponent, {
        data: note,
        width: '25%',
        height: 'h-screen',
      })
      .afterClosed()
      .subscribe({
        next: (res) => {
          if (res) {
            this.notesList = res;
            this.notesService.saveNote(this.notesList);
          }
        },
      });
  }
}
