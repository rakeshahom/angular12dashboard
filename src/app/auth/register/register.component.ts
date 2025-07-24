import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData = {
    name: '',
    email: '',
    password: '',
    roles: [{ id: 2 }] // 👈 Default role
  };


  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register(this.registerData).subscribe({
      next: (res) => {
        Swal.fire({
          icon: 'success',
          title: 'Registered Successfully!',
          text: res.message || 'You can now login.',
          confirmButtonText: 'Go to Login'
        }).then(() => {
          this.router.navigate(['/login']); // redirect after success
        });
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed!',
          text: err.error?.message || 'Something went wrong. Please try again.',
          confirmButtonText: 'OK'
        });
      }
    });
  }
}
