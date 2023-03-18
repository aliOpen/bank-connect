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
  });

  password = '';
  showPassword = false;
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    // function onClick() {
    // e.preventDefault();
    // grecaptcha.ready(function () {
    //   grecaptcha
    //     .execute('6Lecxt8ZAAAAAK7N7n4Pcwnbi5bwBg4Mg_UXl6_F', {
    //       action: 'submit',
    //     })
    //     .then(function (token) {
    //       // Add your logic to submit to your backend server here.
    //       console.log('here', token);
    //     });
    // });

    // }

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
