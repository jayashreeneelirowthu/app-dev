import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private apiService: ApiService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required,]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.router.navigate(['/home']);

      // this.apiService.login(loginData).subscribe(   
      //   Response => {
      // // if ( this.loginForm.controls['username'].value == 'admin' && this.loginForm.controls['password'].value == 'admin') {
      //   console.log(this.loginForm.value);
      //   this.router.navigate(['/home']);
      // alert('Login successful');
  //     },
  //   error => {
  //     console.error('Login failed', error);
  //     alert('invalid username or password');
  //   }
  // );
      
    } else {
      console.log('Form is invalid');
    }
  }

  onForgotPassword() {
    console.log('Redirect to forgot password page');
  }

  onSignUp() {
    this.router.navigate(['/signup']);
  }
  

}


