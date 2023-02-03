import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
  Input,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NotesService } from '../../notes.service';
import { Note } from './note.model';

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
  dialogRef!: MatDialogRef<any>;

  searchList = new FormControl(null);
  @ViewChild('openDailog', { read: TemplateRef }) openDailog!: TemplateRef<any>;

  constructor(private notesService: NotesService, public dialog: MatDialog) {}
  ngOnInit() {
    this.notesList = this.notesService.fetchNotes();
  }

  onRemove(noteIndex: number) {
    this.notesList.splice(noteIndex, 1);
    localStorage.setItem('storelist', JSON.stringify(this.notesList));
  }

  onCardClick(note: Note) {
    this.currentSelectedNote = note;
    this.currentSelectedNote.createdAt;
  }

  onNoteEdited(): void {
    this.notesList = this.notesService.fetchNotes();
    this.dialogRef?.close();
  }

  onChecked(e: Event, i: number, j: number) {
    e.stopPropagation();
    this.notesList[i].todoList[j].completed = (<HTMLInputElement>(
      e.target
    )).checked;

    localStorage.setItem('storelist', JSON.stringify(this.notesList));
  }

  openDialog(note: Note): void {
    this.currentSelectedNote = note;
    this.dialogRef = this.dialog.open(this.openDailog, {
      data: note,
      width: '25%',
      height: 'h-screen',
    });

    this.dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          note = res;
          localStorage.setItem('storelist', JSON.stringify(this.notesList));
        }
      },
    });
  }
}
// fetchNotes(){

// }
