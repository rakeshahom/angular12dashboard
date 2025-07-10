import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';


  constructor(private router: Router) {}

  onLogin() {
  if (this.email === 'admin@example.com' && this.password === 'admin123') {
    localStorage.setItem('token', 'dummy-token'); // ✔️ AuthGuard ko ye milega
    this.router.navigate(['/dashboard']);
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Invalid email or password'
    });
  }
}



}
