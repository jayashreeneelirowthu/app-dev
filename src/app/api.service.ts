import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  login(loginData: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }

  sendHomeData(homeData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/homeData`, homeData);
  }

  // login(credentials: { email: string, password: string}): Observable<any>{
  //   return this.http.post<any>(`${this.apiUrl}/login`,credentials);
  // }

  // login(data: { username: string, password: string }): Observable<any>{
  //   return this.http.post<any>(this.apiUrl, data);
  // }

//   register(data: { username: string, email: string, password: string, dob: string, phone: string }): Observable<any>{
//     return this.http.post<any>(`${this.apiUrl}/register`, data);
//   }

//   forgotPassword(email: { email: string }): Observable<any>{
//     return this.http.post<any>(`${this.apiUrl}/register`, email);
//   }

//   getUserData(): Observable<any>{
//     return this.http.get<any>(`${this.apiUrl}/user-data`);
//   }
}