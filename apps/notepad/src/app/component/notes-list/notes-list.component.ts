import { Component, OnInit } from '@angular/core';
import { Note } from './note.model';

@Component({
  selector: 'np-notepad-input',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {
  notesList: Note[] = [];

  ngOnInit() {
    const initialList = localStorage.getItem('storelist');
    if (initialList) {
      this.notesList = JSON.parse(initialList);
    }
  }

  onRemove(noteIndex: number) {
    // alert(noteIndex + 'Removed');
    this.notesList.splice(noteIndex, 1);
    localStorage.setItem('storelist', JSON.stringify(this.notesList));
  }
  onCardClick() {
    console.log('card clicked');
  }
}
