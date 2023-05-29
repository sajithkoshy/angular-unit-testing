import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  [x: string]: any;
  registrationForm: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }
  
  get f() {
    return this.registrationForm.controls;
  }
  
  onSubmit() {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.registrationForm.invalid) {
      return;
    }
    
    // check if password and confirm password match
    if (this.f['password'].value !== this.f['confirmPassword'].value) {
      this.f['confirmPassword'].setErrors({ mismatch: true });
      return;
    }
    
    // save registration details here
    console.log('Registration successful!');
    this.router.navigate(['/login']);
  }
  
  onLogin() {
    this.router.navigate(['/login']);
  }
  
  passwordsMatch() {
    const password = this.f['password'].value;
    const confirmPassword = this.f['confirmPassword'].value;
    return confirmPassword === '' || password === confirmPassword;
  }
}
