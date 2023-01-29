import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteDetailsComponent } from './component/note-details/note-details.component';
import { NotesListComponent } from './component/notes-list/notes-list.component';
import { ErrorComponent } from './component/error/error.component';

const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: ':id', component: NoteDetailsComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
