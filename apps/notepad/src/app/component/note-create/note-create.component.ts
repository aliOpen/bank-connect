import { Component } from '@angular/core';
import { Note } from '../notes-list/note.model';

@Component({
  selector: 'np-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.scss'],
})
export class NoteCreateComponent {
  notesList: Note[] = [];
  onAdd(titleName: string, contentName: string) {
    this.notesList.push({
      title: titleName,
      content: contentName,
      createdAt: new Date(),
    });
    localStorage.setItem('storelist', JSON.stringify(this.notesList));
  }
}
