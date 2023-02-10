import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Note } from './component/notes-list/note.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  noteUpdated: Subject<boolean> = new Subject<boolean>();

  constructor() {}
  fetchNotes(): Note[] {
    const initialList: string | null = localStorage.getItem('storelist');
    if (initialList) {
      return JSON.parse(initialList);
    } else {
      return [];
    }
  }

  saveNote(data: Note[]): void {
    localStorage.setItem('storelist', JSON.stringify(data));
  }
}
