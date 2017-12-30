import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AddComponent } from './add.component';

@Injectable()
export class AddDeactivateGuard
    implements CanDeactivate<AddComponent> {
    canDeactivate(component : AddComponent): boolean {
        if (component.done)
            return true;

        return confirm("Do you want to leave this page??");    
    }
}
