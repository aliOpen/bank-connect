import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('colorElement') colorElement!: ElementRef;
  createNoteForm: FormGroup = new FormGroup({
    title: new FormControl(null),
    content: new FormControl(null),
    color: new FormControl('bg-white'),
  });
  notesList: Note[] = [];
  showFullForm: boolean = false;
  showColorPalette: boolean = false;

  constructor(private notesService: NotesService, private router: Router) {}

  onAdd() {
    this.notesList = this.notesService.fetchNotes();
    this.notesList.push({
      _id: new Date().getTime().toString(),
      title: this.createNoteForm.value.title,
      content: this.createNoteForm.value.content,
      createdAt: new Date(),
      color: this.createNoteForm.value.color,
    });

    localStorage.setItem('storelist', JSON.stringify(this.notesList));

    this.router.navigate(['']);
  }
  onColor() {
    // this.createNoteForm.patchValue({ color: 'bg-blue-100' });
    this.showColorPalette = !this.showColorPalette;
  }
  showForm() {
    this.showFullForm = true;
  }

  getColor() {
    return this.createNoteForm.get('color')?.value;
  }
  onColorList(color1: string) {
    this.createNoteForm.patchValue({ color: color1 });
  }
}
