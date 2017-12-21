import { Component } from '@angular/core';

@Component({
    selector: 'st-binding',
    templateUrl: './binding.component.html',
    styleUrls: ['./binding.component.css']
})
export class BindingComponent {
    message: string = "Angular";

    keyPressed(data){
        console.log(data);
    }
    GetDate(): string {
        return new Date().toString();
    }

    hours(): number {
        return new Date().getHours();
    }

    isBright(): boolean {
        var d = new Date();

        if (d.getHours() < 10)
            return true;
        else
            return false;
    }
}