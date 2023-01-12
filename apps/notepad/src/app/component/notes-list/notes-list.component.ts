import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { title } from 'process';
import { NotesService } from '../../notes.service';
import { Note } from './note.model';

@Component({
  selector: 'np-notepad-input',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {
  notesList: Note[] = [];
  searchArray: Note[] = [];
  searchForm: FormGroup = new FormGroup({
    searchList: new FormControl(null),
  });

  constructor(private notesService: NotesService) {}
  ngOnInit() {
    this.notesList = this.notesService.fetchNotes();
    this.searchArray = [...this.notesList];
  }

  onRemove(noteIndex: number) {
    // alert(noteIndex + 'Removed');
    this.notesList.splice(noteIndex, 1);
    localStorage.setItem('storelist', JSON.stringify(this.notesList));
  }
  onSearchSubmit() {
    const searchTerm = this.searchForm.value.searchList;
    if (!searchTerm) {
      this.searchArray = this.notesList;
      return;
    }
    this.searchArray = [];
    for (let i = 0; i < this.notesList.length; i++) {
      // console.log(this.notesList[i]);
      if (this.notesList[i].title == searchTerm) {
        this.searchArray.push(this.notesList[i]);
        console.log(this.searchArray);
      }
    }
    // if (this.searchForm.value == this.notesList) {
    // }
  }
}
