import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    const userName = localStorage.getItem('userName');
    let accountId;
    let companyId;
    if (userName) {
      accountId = JSON.parse(userName).data.account.data[0].accounts_id;
      companyId =
        JSON.parse(userName).data.account.data[0].company.data[0].companies_id;
    }

    this.authService.TeamApiCall(accountId, companyId).subscribe(
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

  getFirstNameandLastName(email: string | null) {
    if (!email) return [];
    const str = email.split('@')[0];

    const arr = str.split('.');

    const firstName = arr[0];

    const slicedArr = arr.slice(1, arr.length);

    const lastName = slicedArr.join('.');

    return [firstName, lastName];
  }

  onAddTeamMemberApi() {
    const emailData = this.email.value;
    const [firstName, lastName] = this.getFirstNameandLastName(emailData);

    this.authService.addTeamMember(firstName, lastName, emailData).subscribe(
      {
        next: (res: any) => {
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

  onDeleteMemberApi(deleteMember: string | null) {
    this.authService.deleteMemberApi(deleteMember).subscribe({
      next: (res: any) => {
        console.log('MEMBER DELETED');
      },
    });
  }
  onLogout() {
    console.log('ts file logout');

    this.authService.logoutApi().subscribe(
      () => {
        console.log('+++++++++logout');
        this.router.navigate(['/login']);
        localStorage.removeItem('userName');
      },
      () => {
        console.log('Error++--');
      }
    );
  }
}
