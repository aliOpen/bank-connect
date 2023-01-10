import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor() {}
  fetchNotes() {
    const initialList = localStorage.getItem('storelist');
    console.log(initialList);
    if (initialList) {
      return JSON.parse(initialList);
    } else {
      return [];
    }
  }
}
