import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { NoteDetailsComponent } from './component/note-details/note-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotesListComponent } from './component/notes-list/notes-list.component';
import { NoteComponent } from './component/note/note.component';
import { ErrorComponent } from './component/error/error.component';
import { FilterPipe } from './filter.pipe';
import { DialogOverviewExample } from './component/dialog-overview/dialog-overview.component';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NotesListComponent,
    NoteDetailsComponent,
    ErrorComponent,
    FilterPipe,
    DialogOverviewExample,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],

  exports: [
    AppComponent,
    NoteComponent,
    NotesListComponent,
    NoteDetailsComponent,
    ErrorComponent,
    FilterPipe,
    DialogOverviewExample,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
})
export class AppModule {}
