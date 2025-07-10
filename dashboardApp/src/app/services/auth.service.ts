// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // Dummy check
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('token', 'fake-jwt-token');
      return true;
    }
    return false;
  }

  register(user: any) {
    console.log('Registered User:', user);
    // Real backend hota to POST call hoti
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
