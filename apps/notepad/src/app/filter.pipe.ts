import { Pipe, PipeTransform } from '@angular/core';
import { Note } from './component/notes-list/note.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(notesList: Array<Note>, searchTerm: string | null): Array<Note> {
    if (!searchTerm) return notesList;

    const searchArray: Array<Note> = [];

    for (let i = 0; i < notesList.length; i++) {
      if (
        notesList[i]?.title?.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        searchArray.push(notesList[i]);
      }
    }
    return searchArray;
  }
}
