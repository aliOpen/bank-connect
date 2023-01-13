import { Injectable } from '@angular/core';
import { Note } from './component/notes-list/note.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor() {}
  fetchNotes(): Note[] {
    const initialList = localStorage.getItem('storelist');
    if (initialList) {
      return JSON.parse(initialList);
    } else {
      return [];
    }
  }
}
