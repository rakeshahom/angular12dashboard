import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../model/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
private apiUrl = 'http://localhost:8080/api/auth/countries';
  constructor(private http: HttpClient) { }


getAll():Observable<Country[]>{
  return this.http.get<Country[]>(this.apiUrl);
}
create(country:Country):Observable<Country>{
  return this.http.post<Country>(this.apiUrl,country);
}
update(id:number,country:Country):Observable<Country>{
  return this.http.put<Country>(`${this.apiUrl}/${id}`,country);

}
delete(id:number):Observable<void>{
return this.http.delete<void>(`${this.apiUrl}/${id}`);
}

}
