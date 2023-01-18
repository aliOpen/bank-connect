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
  currentNoteDetail!: Note;
  todos: Task[] = [];
  createNoteDetailForm: FormGroup = new FormGroup({
    detailTitle: new FormControl<string | null>({
      value: null,
      disabled: true,
    }),
    detailContent: new FormControl<string | null>({
      value: null,
      disabled: true,
    }),
    detailTodo: new FormGroup({
      detailTodoName: new FormControl<string | null>(''),
      detailCheckBox: new FormControl<boolean | null>(false),
    }),
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
      name: this.createNoteDetailForm.value.detailTodo.detailTodoName,
      completed: this.createNoteDetailForm.value.detailTodo.detailCheckBox,
    });
    localStorage.setItem('storelist', JSON.stringify(this.notesList));
  }
  onEdit() {
    this.createNoteDetailForm.get('detailTitle')?.enable();
    this.createNoteDetailForm.get('detailContent')?.enable();
  }
  onSubmit() {
    this.currentNoteDetail.title =
      this.createNoteDetailForm.get('detailTitle')?.value;

    this.currentNoteDetail.content =
      this.createNoteDetailForm.get('detailContent')?.value;

    this.currentNoteDetail.updatedAt = new Date();
    localStorage.setItem('storelist', JSON.stringify(this.notesList));
  }
}
