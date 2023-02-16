import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  apiCall() {
    return this.http.post('https://uat-adhip-api.bankopen.co/users/login', {
      login: 'ramesh.bg+75@bankopen.co',
      password: 'Test@123',
    });
  }
}
