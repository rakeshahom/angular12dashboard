// src/app/services/auth.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private router: Router) { }

  // ✅ Login API
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/login`, credentials);
  }

  // ✅ Register API
  register(data: {
    name: string;
    email: string;
    password: string;
    roles: { id: number }[];
  }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users`, data);
  }

  // ✅ Get all users (admin only)
 userList(): Observable<any> {
  const token = localStorage.getItem('jwtToken');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  return this.http.get(`${this.baseUrl}/admin/users`, { headers });
}
  // ✅ In auth.service.ts
// ✅ Angular Service method (return observable, no subscribe here)
updateUserStatus(userId: number, isActive: boolean): Observable<any> {
  return this.http.patch(`${this.baseUrl}/admin/users/status/${userId}?active=${isActive}`, {}, {
    responseType: 'text' 
  });
}




  // ✅ Store token
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // ✅ Get token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // ✅ Logout
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  // ✅ Is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }


  deleteUser(userId: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/admin/users/${userId}`);
}

isTokenExpired(token: string): boolean {
  if (!token) return true;
  const payload = JSON.parse(atob(token.split('.')[1]));
  const now = Math.floor(Date.now() / 1000);
  return payload.exp < now;
}

}
