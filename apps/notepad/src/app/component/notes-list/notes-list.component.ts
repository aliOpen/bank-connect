import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../notes.service';
import { Note } from './note.model';

@Component({
  selector: 'np-notepad-input',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {
  notesList: Note[] = [];

  constructor(private notesService: NotesService) {}
  ngOnInit() {
    this.notesList = this.notesService.fetchNotes();
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
