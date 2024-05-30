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
  // autocompleteValue: string 

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
//     this.autocompleteValue = this.generateRandomString();
 }
//   generateRandomString(): string {
//     const randomString = Math.random().toString(36).substring(7);
//     return randomString;
// }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.router.navigate(['/home']);
      alert('Login successful');
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


