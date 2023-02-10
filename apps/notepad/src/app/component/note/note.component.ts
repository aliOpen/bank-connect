import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  ViewChild,
} from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { NotesService } from '../../notes.service';
import { Note } from '../notes-list/note.model';
import { Task } from '../notes-list/task.model';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'np-note',
  templateUrl: './note.component.html',
})
export class NoteComponent {
  notesList: Note[] = [];

  showColorPalette: boolean = false;
  showLabel: boolean = false;
  showAttachedLabel: boolean = false;
  baseUrl: string = '';

  @ViewChild('contentInputField') contentInputField!: any;
  @ViewChild('colorElement') colorElement!: ElementRef;

  createNoteForm: FormGroup = new FormGroup({
    title: new FormControl<string | null>({
      value: null,
      disabled: false,
    }),
    content: new FormControl<string | null>({
      value: null,
      disabled: false,
    }),
    color: new FormControl<string | null>('bg-white'),
    image: new FormControl<string | null>(''),
    label: new FormControl<string | null>({
      value: null,
      disabled: false,
    }),
    tasks: new FormArray<FormArray>([]),
  });

  constructor(
    private notesService: NotesService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public currSelectedNote: Note | undefined,
    private _dialogRef: MatDialogRef<NoteComponent>
  ) {}

  ngOnInit() {
    if (
      this.currSelectedNote &&
      Object.keys(this.currSelectedNote).length === 0
    )
      this.currSelectedNote = undefined;

    if (this.currSelectedNote) {
      this.createNoteForm.patchValue({
        title: this.currSelectedNote.title,
        content: this.currSelectedNote.content,
        color: this.currSelectedNote.color,
        image: this.currSelectedNote.attachment,
        label: this.currSelectedNote.label,
      });

      this.currSelectedNote.todoList?.forEach((todo: Task) => {
        const task: FormGroup = new FormGroup({
          name: new FormControl<string | null>({
            value: todo.name,
            disabled: false,
          }),
          completed: new FormControl<boolean | null>({
            value: todo.completed,
            disabled: false,
          }),
        });
        (<FormArray>this.createNoteForm.get('tasks')).push(task);
      });
    }
  }

  ngAfterViewInit() {
    if (this.currSelectedNote) {
      this.contentInputField?.nativeElement.focus();
    }
  }

  onSubmit() {
    this.notesList = this.notesService.fetchNotes();
    if (this.currSelectedNote) {
      this.onEdit();
    } else {
      if (
        !this.createNoteForm.value.title &&
        !this.createNoteForm.value.content
      ) {
        return;
      }
      this.onAdd();
    }

    this._dialogRef?.close(this.notesList);
  }

  onEdit() {
    for (let i = 0; i < this.notesList.length; i++) {
      if (this.currSelectedNote?._id === this.notesList[i]._id) {
        this.notesList[i] = {
          ...this.notesList[i],
          title: this.createNoteForm.value.title,
          content: this.createNoteForm.value.content,
          color: this.createNoteForm.value.color,
          attachment: this.createNoteForm.value.image,
          label: this.createNoteForm.value.label,
          todoList: (<FormArray>this.createNoteForm.get('tasks'))?.value,
          updatedAt: new Date(),
        };
      }
    }
  }

  onAdd() {
    this.notesList.unshift({
      _id: new Date().getTime().toString(),
      title: this.createNoteForm.value.title,
      content: this.createNoteForm.value.content,
      createdAt: new Date(),
      updatedAt: new Date(),
      color: this.createNoteForm.value.color,
      attachment: this.createNoteForm.value.image,
      label: this.createNoteForm.value.label,
      todoList: (<FormArray>this.createNoteForm.get('tasks'))?.value,
    });

    this.resetForm();
  }

  onColor() {
    this.showColorPalette = !this.showColorPalette;
  }

  getColor() {
    return this.createNoteForm.get('color')?.value;
  }
  onColorList(color1: string) {
    this.createNoteForm.patchValue({ color: color1 });
  }
  onLabel() {
    this.showLabel = !this.showLabel;
  }
  onAddLabel() {
    this.showLabel = false;
    this.showAttachedLabel = true;
  }
  onAddTask(): void {
    const task: FormGroup = new FormGroup({
      name: new FormControl<string | null>({
        value: null,
        disabled: false,
      }),
      completed: new FormControl<boolean | null>({
        value: false,
        disabled: false,
      }),
    });

    (<FormArray>this.createNoteForm.get('tasks')).push(task);
  }
  getControls() {
    return (<FormArray>this.createNoteForm.get('tasks'))?.controls;
  }
  //clear the form once the note is added
  resetForm() {
    this.createNoteForm.reset();
    (<FormArray>this.createNoteForm.get('tasks'))?.clear();
  }
  //Image Adding
  onImage(event: Event) {
    const targetElement = <HTMLInputElement>event.target;
    let fileSelected;
    if (targetElement.files && targetElement.files.length > 0) {
      fileSelected = targetElement.files[0];
    }

    const reader = new FileReader();
    reader.readAsDataURL(<File>fileSelected);

    reader.onload = (e) => {
      this.baseUrl = <string>e.target?.result;
      this.createNoteForm.patchValue({ image: this.baseUrl });
    };
  }
}
