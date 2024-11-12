import { Component } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LayoutComponent,
    ReactiveFormsModule, 
    PrimaryInputComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private loginService: ServicesService
  ){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => console.log('success'),
      error: () => console.log('error')
    })
  }

  navigate(){
   this.router.navigate(['signup']);
  }
}
