import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ali-assignments-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginPageForm: FormGroup = new FormGroup({
    username: new FormControl(),
    pass: new FormControl(),

    // password1 ='';
    // showPassword = false;

    // toggleShowPassword(){
    //   this.showPassword = !this.showPassword
    // }
  });

  password = '';
  showPassword = false;
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  constructor(private api: AuthService, private router: Router) {}

  onSubmit() {
    this.api.apiCall().subscribe(
      (data) => {
        console.warn('get api data', data);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.router.navigate(['/dashboard']);
      }
    );
  }
}
