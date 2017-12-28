import { Component, OnInit } from '@angular/core';
import { WebBook } from './WebBook';
import { BooksService } from '../services/BooksService';

@Component({
    selector: 'st-books',
    templateUrl: './webbooks.component.html'
})
export class WebBooksComponent implements OnInit {
    books: WebBook[];
    constructor(private booksService:BooksService) {
    }
    
    deleteBook(id : number) 
    {
        this.booksService.deleteBook(id)
        .subscribe( resp => alert("Deleted!"),
                    resp => alert("Sorry! Could not delete book"));
    }
    ngOnInit() {
       console.log(this.booksService);
       this.booksService.getBooks()
          .subscribe( result => this.books = result);
    }
}