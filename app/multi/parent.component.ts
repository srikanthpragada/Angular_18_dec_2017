import { Component} from '@angular/core';

@Component({
    selector: 'st-parent',
    templateUrl: './parent.component.html'
    
})
export class ParentComponent  {
    messages : string[] = 
     [
     "Quitter never win winners never quit",
     "Nothing works until you work",
     "You see the world in the way you are"
    ]
   
    showMessage(msg) {
        console.log("Selected :" + msg);
    }
}