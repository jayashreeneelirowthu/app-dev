import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  countries = ['USA', 'Canada', 'UK', 'Australia', 'India']; 
today: any;
constructor(private fb: FormBuilder) {
  const todayDate = new Date();
  this.today = todayDate.toISOString().split('T')[0]; 
  this.signupForm = this.fb.group({
      FullName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      dateOfBirth: ['', [Validators.required, this.pastDateValidator]],
      country: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_@!#%&]+$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }
  pastDateValidator(control: any) {
    const inputDate = new Date(control.value);
    const today = new Date();
    return inputDate < today ? null : { pastDate: true };
  }
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }
  onSubmit() {
    if (this.signupForm.valid) {
      // console.log(this.signupForm.value);
    } else {
      // console.log('Form is invalid');
    }
  }
}
