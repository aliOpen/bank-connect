import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ali-assignments-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private router: Router) {}
  onclickTeam() {
    this.router.navigate(['/team']);
  }
}
