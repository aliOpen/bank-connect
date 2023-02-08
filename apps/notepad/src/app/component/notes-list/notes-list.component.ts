import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  TemplateRef,
  HostListener,
} from '@angular/core';
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
  clickLocation = '';
  @ViewChild('noteElement', { read: ElementRef }) noteElement!: ElementRef;

  @HostListener('document:click', ['$event.target'])
  clicked(target: EventTarget) {
    if (this.noteElement?.nativeElement?.contains(target)) {
      // console.log('Inside');
      this.clickLocation = 'inside';
    } else {
      // console.log('Outside');
      this.clickLocation = 'outside';
    }
  }
  notesList: Note[] = [];
  showColdScreen: boolean = true;
  noteEditForm: FormGroup = new FormGroup({
    editTitle: new FormControl<string | null>(''),
  });
  showDelete: boolean = false;
  currentSelectedNote!: Note;
  dialogRef!: MatDialogRef<any>;

  searchList = new FormControl(null);
  @ViewChild('openCard', { read: TemplateRef }) openCard!: TemplateRef<any>;

  constructor(private notesService: NotesService, public dialog: MatDialog) {}
  ngOnInit() {
    this.notesList = this.notesService.fetchNotes();
  }

  onRemove(noteIndex: number) {
    this.notesList.splice(noteIndex, 1);
    localStorage.setItem('storelist', JSON.stringify(this.notesList));
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
    this.dialogRef = this.dialog.open(NoteComponent, {
      data: note,
      width: '25%',
      height: 'h-screen',
    });
  }
}
