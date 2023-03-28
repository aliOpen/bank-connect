import {
  Component,
  ComponentRef,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ali-assignments-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  @ViewChild('drawer') drawerComponent!: MatDrawer;
  email = new FormControl('');
  teamMembers: any = [];
  addTeamMembers: any = [];
  showLoader = false;
  showLogoutLoader = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    console.log(this.drawerComponent);

    this.fetchTeamMembers();
  }

  fetchTeamMembers() {
    this.showLoader = true;
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
          this.showLoader = false;
        },
      },
      {
        error: (err: any) => {
          console.log(err);
          this.showLoader = false;
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
    this.showLoader = true;
    const emailData = this.email.value;
    const [firstName, lastName] = this.getFirstNameandLastName(emailData);

    this.authService.addTeamMember(firstName, lastName, emailData).subscribe(
      {
        next: (res: any) => {
          this.addTeamMembers = res.data;
          this.showLoader = false;
          this.drawerComponent.close();
          this.fetchTeamMembers();
        },
      },
      {
        error: (err: any) => {
          this.showLoader = false;
        },
      }
    );
  }

  onDeleteMemberApi(deleteMember: string | null) {
    this.authService.deleteMemberApi(deleteMember).subscribe({});
  }
  onLogout() {
    this.showLogoutLoader = true;

    this.authService.logoutApi().subscribe(
      () => {
        localStorage.removeItem('userName');
        this.showLogoutLoader = false;
        this.router.navigate(['/login']);
      },
      () => {
        this.showLogoutLoader = false;
      }
    );
  }
}
