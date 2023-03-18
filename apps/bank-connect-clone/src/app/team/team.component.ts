import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ali-assignments-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  teamMembers: any = [];

  ngOnInit() {
    const res = this.api.getApiCall();
    this.teamMembers = res;
  }
  constructor(private api: AuthService) {}
}
