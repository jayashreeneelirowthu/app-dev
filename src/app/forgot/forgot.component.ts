import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit{
  forgotForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router) { } 
  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]]
    });
  }
  get f() { return this.forgotForm.controls; }
  onSubmit(): void{
    this.submitted = true;
    if(this.forgotForm.invalid){
      return;
    }
    this.router.navigate(['/login']); 
  }
}
