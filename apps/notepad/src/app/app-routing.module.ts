import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteCreateComponent } from './component/note-create/note-create.component';
import { NoteDetailsComponent } from './component/note-details/note-details.component';
import { NotesListComponent } from './component/notes-list/notes-list.component';

const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'create', component: NoteCreateComponent },
  { path: ':id', component: NoteDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
