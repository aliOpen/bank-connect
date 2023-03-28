import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'ali-assignments-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  //Reactive Form...
  loginPageForm: FormGroup = new FormGroup({
    username: new FormControl(),
    pass: new FormControl(),
  });
  //show or Hide Loader
  showLoader = false;

  //Show or Hide Password...
  password = '';
  showPassword = false;

  //Show or Hide Password logic...
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {}

  onSubmit() {
    this.showLoader = true;
    const grecaptcha = (window as any).grecaptcha;

    grecaptcha.ready(() => {
      grecaptcha
        .execute('6Lecxt8ZAAAAAK7N7n4Pcwnbi5bwBg4Mg_UXl6_F', {
          action: 'submit',
        })
        .then((token: string) => {
          // Add your logic to submit to your backend server here.
          const username = this.loginPageForm.get('username')?.value;
          const passW = this.loginPageForm.get('pass')?.value;
          this.authService.loginApiCall(username, passW, token).subscribe(
            (data) => {
              this.router.navigate(['/dashboard']);
              console.log('get api data', data);
              this.storageService.saveData('userName', data);
              this.showLoader = false;
            },
            (error) => {
              // this.router.navigate(['/dashboard']);
              console.log('Error!!!!');
            }
          );
          console.log('here', token);
        });
    });
  }
}
