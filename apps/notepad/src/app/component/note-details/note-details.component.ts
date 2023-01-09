import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { arrayBuffer } from 'stream/consumers';
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
  taskName: string = '';
  taskCompleted: boolean = false;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    const routerUniqueId = this.route.snapshot.params['id'];
    const initialList = localStorage.getItem('storelist');
    if (initialList) {
      this.notesList = JSON.parse(initialList);
    }
    for (let i = 0; i < this.notesList.length; i++) {
      if (routerUniqueId === this.notesList[i]._id) {
        this.currentNoteDetail = this.notesList[i];
        console.log(this.currentNoteDetail);
      }
    }
  }

  onAddTodo() {
    if (!this.taskName) return;
    if (!this.currentNoteDetail.todoList) this.currentNoteDetail.todoList = [];
    this.currentNoteDetail.todoList.push({
      name: this.taskName,
      completed: this.taskCompleted,
    });
    localStorage.setItem('storelist', JSON.stringify(this.notesList));
  }
}
