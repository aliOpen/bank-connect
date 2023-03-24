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
    this.authService.logoutApi().subscribe(
      (data) => {
        this.router.navigate(['/login']);
        localStorage.removeItem('userName');
        console.log('+++++++++logout');
      },
      (err) => {
        console.log('Error++--');
      }
    );
  }
}
