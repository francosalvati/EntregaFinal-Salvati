import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoginFormValue } from 'src/app/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {



  emailControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ])
  passwordControl: FormControl = new FormControl('', [
    Validators.required
  ])

  loginForm: FormGroup = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl
  })


  constructor( private authService: AuthService, private activatedRoute: ActivatedRoute) { }

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched()
    } else {
      this.authService.login(this.loginForm.value as LoginFormValue)
    }
  }

  getErrorMessage(): string | undefined {
    if (this.emailControl.hasError('required')) { return 'Debes ingresar algun email' }
    if (this.emailControl.hasError('email')) { return 'Tu Email no es valido' }
    if (this.passwordControl.hasError('required')) { return 'Tienes que ingresar un valor' }
    else { return '' }
  }
}
