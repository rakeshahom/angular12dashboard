import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  private apiUrl = 'http://localhost:5000';
  constructor(private http:HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addProduct(product:any):Observable<any>{
    return this.http.post<any>(this.apiUrl,product);

  }
updateProduct(id:number,product:any):Observable<any>{
  return this.http.put<any>(`${this.apiUrl}/${id}`,product);

}
deleteProduct(id:number):Observable<void>
{
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
}
}
