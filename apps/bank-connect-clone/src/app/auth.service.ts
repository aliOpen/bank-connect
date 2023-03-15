import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  apiCall() {
    return this.http.post('https://uat-anandhu-api.bankopen.co/login', {
      login: 'zemrin.pa+8968@bankopen.co',
      password: 'Test@123',
    });
  }
}
