import { Component } from '@angular/core';

@Component({
  selector: 'st-course',
  templateUrl:  './course.Component.html'
})
export class CourseComponent {
    title:string  = 'Angular 4';
    duration : number = 12;
    fee : number  = 2000;
    bestFee : number;
    topics : string [] = ["Building Blocks","Data Binding", "Forms","Ajax"];

    showFee() {
        this.bestFee = this.fee  * 0.90;
    }
}
