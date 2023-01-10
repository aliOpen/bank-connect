import { Component } from '@angular/core';
import { NotesService } from '../../notes.service';
import { Note } from '../notes-list/note.model';

@Component({
  selector: 'np-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.scss'],
})
export class NoteCreateComponent {
  notesList: Note[] = [];

  constructor(private notesService: NotesService) {}

  onAdd(titleName: string, contentName: string) {
    this.notesList = this.notesService.fetchNotes();
    this.notesList.push({
      _id: new Date().getTime().toString(),
      title: titleName,
      content: contentName,
      createdAt: new Date(),
    });
    localStorage.setItem('storelist', JSON.stringify(this.notesList));
  }
}
