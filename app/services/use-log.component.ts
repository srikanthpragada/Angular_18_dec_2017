import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';
import { BooksService } from './BooksService';
import { Optional} from '@angular/core';

@Component({
    selector: 'st-log',
    template: `
     <button (click)="showToday()">Show Today </button>
    `,
    // providers : [LogService]
})
export class UseLogComponent  {
    
    // Depedency Injection 
    constructor(private log : LogService,
                @Optional() private books : BooksService) { 
          console.log("BooksService " + this.books);
    }

    showToday() {
        this.log.log( new Date().toString());
    }
    
    ngOnInit() {
       this.log.name = "Log Service";
       this.log.log("This is to test!");
       this.log.error("This is an error!");
    }
  
}