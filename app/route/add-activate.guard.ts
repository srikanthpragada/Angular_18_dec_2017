import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AddActivateGuard implements CanActivate {
    canActivate(): boolean {
        var pwd = prompt("Enter your password");
        if (pwd == "ng")
            return true;
        else
            return false;
    }
}
