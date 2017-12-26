import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'st-child',
    templateUrl : './child.component.html'
})
export class ChildComponent  implements OnInit {
    @Input() message : string;
    @Output() selectedMessage = new EventEmitter<string>();
    
    constructor() {
    }

    ngOnInit() {
        console.log("Message : " + this.message);
    }


    selected() 
    {
       // raise event and pass parameter to even handler
       this.selectedMessage.emit(this.message); 
    }
}