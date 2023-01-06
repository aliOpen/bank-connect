import { Component } from '@angular/core';
import { Note } from '../notes-list/note.model';

@Component({
  selector: 'np-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.scss'],
})
export class NoteCreateComponent {
  notesList: Note[] = [];

  fetchStoredNotes() {
    const initialList = localStorage.getItem('storelist');
    if (initialList) {
      this.notesList = JSON.parse(initialList);
    }
  }

  onAdd(titleName: string, contentName: string) {
    this.fetchStoredNotes();
    this.notesList.push({
      _id: new Date().getTime().toString(),
      title: titleName,
      content: contentName,
      createdAt: new Date(),
    });
    localStorage.setItem('storelist', JSON.stringify(this.notesList));
  }
}
