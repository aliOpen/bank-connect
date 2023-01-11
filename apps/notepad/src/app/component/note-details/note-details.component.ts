import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../../notes.service';
import { Note } from '../notes-list/note.model';
import { Task } from './task.model';

@Component({
  selector: 'np-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss'],
})
export class NoteDetailsComponent implements OnInit {
  notesList: Note[] = [];
  currentNoteDetail: any;
  todos: Task[] = [];
  isEditable: boolean = false;
  createNoteDetailForm: FormGroup = new FormGroup({
    detailTitle: new FormControl(null),
    detailContent: new FormControl(null),
    detailTodo: new FormControl(null),
    detailCheckBox: new FormControl(false),
  });
  constructor(
    private route: ActivatedRoute,
    private notesService: NotesService
  ) {}
  ngOnInit() {
    const routerUniqueId = this.route.snapshot.params['id'];
    this.notesList = this.notesService.fetchNotes();
    for (let i = 0; i < this.notesList.length; i++) {
      if (routerUniqueId === this.notesList[i]._id) {
        this.currentNoteDetail = this.notesList[i];
        this.createNoteDetailForm.patchValue({
          detailTitle: this.currentNoteDetail.title,
          detailContent: this.currentNoteDetail.content,
        });
      }
    }
  }

  onAddTodo() {
    if (!this.createNoteDetailForm.value.detailTodo) return;
    if (!this.currentNoteDetail.todoList) this.currentNoteDetail.todoList = [];
    this.currentNoteDetail.todoList.push({
      name: this.createNoteDetailForm.value.detailTodo,
      completed: this.createNoteDetailForm.value.detailCheckBox,
    });
    console.log(this.createNoteDetailForm);
    localStorage.setItem('storelist', JSON.stringify(this.notesList));
  }
  onEdit() {
    this.isEditable = true;
  }
  onSubmit() {
    // this.isEditable = this.notesService.fetchNotes();
    console.log('submit');
    // console.log(this.notesList);
    // localStorage.setItem('editList', JSON.stringify(this.notesList));
  }
}
