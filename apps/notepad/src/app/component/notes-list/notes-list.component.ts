import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { fstat } from 'fs';
import { NotesService } from '../../notes.service';
import { Note } from './note.model';

@Component({
  selector: 'np-notepad-input',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {
  notesList: Note[] = [];
  showModal: boolean = false;
  noteEditForm: FormGroup = new FormGroup({
    editTitle: new FormControl<string | null>(''),
  });
  showDelete: boolean = false;
  currentSelectedNote!: Note;

  searchList = new FormControl(null);

  constructor(private notesService: NotesService) {}
  ngOnInit() {
    this.notesList = this.notesService.fetchNotes();
  }

  onRemove(noteIndex: number) {
    this.notesList.splice(noteIndex, 1);
    localStorage.setItem('storelist', JSON.stringify(this.notesList));
  }
  // checkValue(e: Event) {
  //   e.stopPropagation();
  // }

  onCardClick(note: Note) {
    this.currentSelectedNote = note;
    this.showModal = true;
    this.currentSelectedNote.createdAt;
  }

  onNoteEdited(): void {
    this.showModal = false;
    this.notesList = this.notesService.fetchNotes();
  }
  onMouseEnter() {
    this.showDelete = true;
  }
  onMouseLeave() {
    this.showDelete = false;
  }
}
