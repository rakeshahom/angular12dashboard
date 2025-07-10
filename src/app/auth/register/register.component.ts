import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = '';
  mobile = '';
  email = '';
  password = '';

  constructor(private router: Router) {}

  onRegister() {
    if (this.name && this.mobile && this.email && this.password) {
      // ✅ Example: Dummy save
      localStorage.setItem('user', JSON.stringify({
        name: this.name,
        mobile: this.mobile,
        email: this.email
      }));

      Swal.fire({
        icon: 'success',
        title: 'Registration Successful!'
      }).then(() => {
        this.router.navigate(['/login']);
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Please fill all fields'
      });
    }
  }
}
