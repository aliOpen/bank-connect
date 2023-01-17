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
  baseUrl: string = '';
  @ViewChild('colorElement') colorElement!: ElementRef;
  createNoteForm: FormGroup = new FormGroup({
    title: new FormControl<string | null>(null),
    content: new FormControl<string | null>(null),
    color: new FormControl<string | null>('bg-white'),
    image: new FormControl<string | null>(''),
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
      attachment: this.createNoteForm.value.image,
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
  //Image Adding
  onImage(event: Event) {
    const targetElement = <HTMLInputElement>event.target;
    let fileSelected;
    if (targetElement.files && targetElement.files.length > 0) {
      fileSelected = targetElement.files[0];
    }

    const reader = new FileReader();
    reader.readAsDataURL(<File>fileSelected);

    reader.onload = (e) => {
      this.baseUrl = <string>e.target?.result;
      this.createNoteForm.patchValue({ image: this.baseUrl });
    };
  }
}
