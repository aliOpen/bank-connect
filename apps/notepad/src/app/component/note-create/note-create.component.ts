import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from '../../notes.service';
import { Note } from '../notes-list/note.model';

@Component({
  selector: 'np-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.scss'],
})
export class NoteCreateComponent {
  createNoteForm: FormGroup = new FormGroup({
    title: new FormControl(null),
    content: new FormControl(null),
  });
  notesList: Note[] = [];
  showFullForm: boolean = false;

  constructor(private notesService: NotesService, private router: Router) {}

  onAdd() {
    this.notesList = this.notesService.fetchNotes();
    this.notesList.push({
      _id: new Date().getTime().toString(),
      title: this.createNoteForm.value.title,
      content: this.createNoteForm.value.content,
      createdAt: new Date(),
    });

    localStorage.setItem('storelist', JSON.stringify(this.notesList));

    this.router.navigate(['']);
  }
  showForm() {
    this.showFullForm = true;
  }
}
