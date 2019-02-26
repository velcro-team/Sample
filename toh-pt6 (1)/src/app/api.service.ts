import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): any {
    return this.http.post<any>('https://reqres.in/api/login', {
      email: email,
      password: password
    });
  }

}
