import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { stringify } from 'querystring';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ali-assignments-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  email = new FormControl('');
  teamMembers: any = [];
  addTeamMembers: any = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.TeamApiCall().subscribe(
      {
        next: (res: any) => {
          this.teamMembers = res.data;
        },
      },
      {
        error: (err: any) => {
          console.log(err);
        },
      }
    );
  }

  onAddTeamMemberApi() {
    const emailData = this.email.value;
    this.authService.addTeamMember(emailData).subscribe(
      {
        next: (res: any) => {
          console.log(res);
          this.addTeamMembers = res.data;
        },
      },
      {
        error: (err: any) => {
          console.log(err);
        },
      }
    );
  }
}
