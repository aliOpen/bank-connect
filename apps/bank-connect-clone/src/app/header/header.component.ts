import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ali-assignments-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userName: string;

  constructor(private router: Router, private authService: AuthService) {
    this.userName = this.getUserName();
  }
  ngOnInit(): void {
    console.log('GET  USERNAME FROM EMAIL');
    this.getUserName();
  }
  onclickTeam() {
    this.router.navigate(['/team']);
  }
  getUserName() {
    const username = localStorage.getItem('userName');
    let getName;
    if (username) {
      // console.log(username);
      getName = JSON.parse(username).data.first_name;
      console.log(getName);
    }
    return getName;
  }

  onLogout() {
    console.log('ts file logout');

    this.authService.logoutApi().subscribe(
      () => {
        console.log('+++++++++logout');
        localStorage.removeItem('userName');
        this.router.navigate(['/login']);
      },
      () => {
        console.log('Error++--');
      }
    );
  }
}
