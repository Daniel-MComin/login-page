import { Component } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { LayoutComponent } from '../../components/layout/layout.component';
import { ServicesService } from '../../services/services.service';
import { ToastrService } from 'ngx-toastr';
import { ISignUpForm } from '../../interfaces/types/login-response';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    LayoutComponent,
    ReactiveFormsModule, 
    PrimaryInputComponent
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignUpComponent {
  signUpForm!: FormGroup<ISignUpForm>;

  constructor(
    private router: Router,
    private loginService: ServicesService, 
    private toastr: ToastrService
  ){
    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  submit(){
    this.loginService.login(this.signUpForm.value.email, this.signUpForm.value.password).subscribe({
      next: () => this.toastr.success('Login feito com sucesso'),
      error: () => this.toastr.error('Erro ao fazer login, tente novamente')
    })
  }

  navigate(){
   this.router.navigate(['']);
  }
}
