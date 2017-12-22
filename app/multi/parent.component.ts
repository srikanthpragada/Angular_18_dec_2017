import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'st-parent',
    templateUrl: './parent.component.html'
    
})
export class ParentComponent  {
    messages : string[] = 
    ["Quitter never win winner never quit",
     "Nothing works until you work",
     "You see the world in the way you are"
    ]
    constructor() { }

    

    showMessage(msg) {
        console.log("Selected :" + msg);
    }
}