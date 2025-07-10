import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'; // ✅ HttpClient import

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://localhost:5000'; // ✅ Mock JSON server

  constructor(private http: HttpClient) {}  // ✅ Ek hi constructor

  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/categories`);
  }

  createCategory(category: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/categories`, category);
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/categories/${id}`);
  }
}
