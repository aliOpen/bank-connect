import { Component } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'ali-assignments-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loginPageForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  onSubmit() {
    console.log('Form Submitted');
  }
}
