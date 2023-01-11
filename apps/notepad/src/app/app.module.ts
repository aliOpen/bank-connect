import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { NoteDetailsComponent } from './component/note-details/note-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotesListComponent } from './component/notes-list/notes-list.component';
import { NoteCreateComponent } from './component/note-create/note-create.component';
import { ErrorComponent } from './component/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    NoteCreateComponent,
    NoteDetailsComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    AppRoutingModule,

    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
