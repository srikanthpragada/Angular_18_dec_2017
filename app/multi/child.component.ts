import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'st-child',
    template: `<h2>{{message}}</h2> 
               <button (click)="selected(message)">Select</button> `
})
export class ChildComponent  implements OnInit {
    @Input() message : string;
    @Output() selectedMessage = new EventEmitter<string>();
    
    constructor() {
    }

    ngOnInit() {
        console.log("ngOnInit");
    }


    selected(msg : string) 
    {
        // raise event and pass parameter to even handler
        this.selectedMessage.emit(msg); 
    }
}