import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ali-assignments-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginPageForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
  constructor(private api: AuthService) {}

  onSubmit() {
    this.api.apiCall().subscribe((data) => {
      console.warn('get api data', data);
    });
  }
}
