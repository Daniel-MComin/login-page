import { FormControl } from "@angular/forms";

export interface ILoginResponse {
    token: string;
    username:string;
}

export interface ILoginForm {
    email: FormControl;
    password: FormControl;
}

export interface ISignUpForm {
    name: FormControl;
    email: FormControl;
    password: FormControl;
    passwordConfirm: FormControl;
}