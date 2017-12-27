import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'st-rlogin',
    templateUrl: './rlogin.component.html'
})
export class ReactiveLoginComponent {
    loginForm: FormGroup;
    username: FormControl;
    message: string;
    submitted: boolean = false;

    validatePassword(control: FormControl) {
        if (control.value != "") {
            if (control.value.indexOf("*") >= 0)
                return null; // success
            else
                return { mustHaveStar: true }; // error
        }
        else
            return null;
    }
    

    validateUsernamePassword(form : FormGroup) {
        if (form.controls.username.value != form.controls.password.value)
                return null; // success
        else
                return { invalidPassword : true};
    }

    constructor() {
        this.username = new FormControl('',
            [Validators.required, Validators.minLength(6)]);
        this.loginForm = new FormGroup(
            {
                username: this.username,
                password: new FormControl('',
                    [Validators.required,
                    this.validatePassword]),
            }
        );
        this.loginForm.setValidators([this.validateUsernamePassword]);
    }

    login() {
        this.submitted = true;
        console.log(this.loginForm);
        if (this.loginForm.valid) {
            if (this.username.value == "admin"
                && this.loginForm.controls.password.value == "admin")
                this.message = "Login Successful";
            else
                this.message = "Invalid Login!";
        }
    }

}