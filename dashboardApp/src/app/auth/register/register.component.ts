// register.component.ts
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  template: `
    <h2>Register</h2>
    <form (ngSubmit)="register()">
      <input [(ngModel)]="username" name="username" placeholder="Username" required>
      <input [(ngModel)]="password" name="password" placeholder="Password" type="password" required>
      <button type="submit">Register</button>
    </form>
  `
})
export class RegisterComponent {
  username = '';
  password = '';

  constructor(private auth: AuthService) {}

  register() {
    this.auth.register({ username: this.username, password: this.password });
    alert('Registered! Now login.');
  }
}
