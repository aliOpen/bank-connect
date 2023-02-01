import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesListComponent } from './component/notes-list/notes-list.component';
import { ErrorComponent } from './component/error/error.component';

const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
