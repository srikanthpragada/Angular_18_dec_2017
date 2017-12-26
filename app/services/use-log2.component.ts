import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';

@Component({
    selector: 'st-log2',
    template: `
     <button (click)="showName()">Show Name </button>
    `,
    providers : [LogService]
})
export class UseLog2Component  {
    
    // Depedency Injection 
    constructor(private log : LogService) { 

    }

    showName() {
        this.log.log("Message ");
    }
    
    ngOnInit() {
       this.log.name = "Log2 Service";
    }
  
}