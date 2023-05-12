import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  saveData(userData: string, data: any) {
    localStorage.setItem(userData, JSON.stringify(data));
  }
  getToken() {
    const userName = localStorage.getItem('userName');
    let token = '';
    if (userName) {
      token = JSON.parse(userName)?.meta.token;
    }
    return token;
  }
}
