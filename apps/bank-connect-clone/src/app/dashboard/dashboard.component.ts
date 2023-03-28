import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ali-assignments-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private router: Router, private authService: AuthService) {}
  onclickTeam() {
    this.router.navigate(['/team']);
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
