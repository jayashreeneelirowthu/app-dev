import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
 }
  onSubmit() {
    if (this.loginForm.valid) {
      // console.log(this.loginForm.value);
      if (this.loginForm.controls['username'].value =='admin' && this.loginForm.controls['password'].value =='admin'){
      this.router.navigate(['/home']);
      }
      else{
        alert('invalid credentials');
      }
    } else {
      // console.log('Form is invalid');
    }
  }
  onForgotPassword() {
    // console.log('Redirect to forgot password page');
  }
  onSignUp() {
    this.router.navigate(['/signup']);
  }
}


