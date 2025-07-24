import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService,private router:Router) { }
  onLogin() {
    const loginData = {
     email: this.email,  // Assuming backend expects username/email
      password: this.password,
    };

    this.authService.login(loginData).subscribe({
      next: (res) => {
        console.log('Login successful:', res);
        
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard'])
      },
      error: (err) => {
        this.errorMessage = 'Invalid credentials';
      }
    });
  }
}