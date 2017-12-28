import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AddBookComponent } from './http/add-book.component';
import { WebBooksComponent } from './http/webbooks.component';
import { BooksService } from './services/BooksService';


@NgModule({
  declarations: [
     AddBookComponent, WebBooksComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [BooksService],
  bootstrap: [AddBookComponent,WebBooksComponent]
})
export class AppModule { }
