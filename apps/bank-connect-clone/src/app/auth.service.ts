import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  apiCall() {
    return this.http.post('https://v2-api.bankopen.co/users/login', {
      login: '1212132434',
      password: 'Test@123',
    });
  }
}
