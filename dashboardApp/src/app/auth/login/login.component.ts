import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };
email: any;
password: any;

  constructor(private router: Router) {}

  onLogin() {
    if (this.loginData.email === 'admin@example.com' && this.loginData.password === 'admin') {
      localStorage.setItem('authToken', 'sample_token');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials!');
    }
  }
}
