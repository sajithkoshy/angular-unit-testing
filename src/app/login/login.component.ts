import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;
  submitted: boolean=false
  loginForm: any;

  constructor(private router: Router) { }

  onSubmit() {
    this.submitted=true;
    if (this.username === 'ssk' && this.password === '123') {
      this.router.navigate(['/home']);
    }
    else{
      this.username='';
      this.password='';
      alert("Invalid username and Password")
    }  
  }
  onRegister() {
    this.router.navigate(['/register']);
  }
}
