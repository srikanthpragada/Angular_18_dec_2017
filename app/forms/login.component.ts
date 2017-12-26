import { Component } from '@angular/core';

@Component({
    selector: 'st-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    username: string;
    password: string;
    message: string;

    constructor() { }

    login() {
        if (this.username == "admin" && this.password == "admin")
            this.message = "Login Successful";
        else
            this.message = "Sorry! Invalid Login!";
    }
     
}