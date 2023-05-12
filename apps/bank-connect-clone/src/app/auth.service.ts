import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Parameter {
  accounts_id: number | null;
  companies_id: number | null;
  orderBy: string;
  sortedBy: string;
  page: string;
  open_roles_id_: string;
  department_id: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  loginApiCall(
    username: string,
    passW: string,
    token: string
  ): Observable<unknown> {
    return this.http.post('https://v2-api.bankopen.co/users/login', {
      login: username,
      password: passW,
      recaptcha: token,
    });
  }
  isLoggedIn() {
    return localStorage.getItem('userName');
  }

  TeamApiCall(accountId: number | null, companyId: number | null): any {
    const parameters: any = {
      accounts_id: accountId,
      companies_id: companyId,
      orderBy: 'created_at',
      sortedBy: 'desc',
      page: '1',
      open_roles_id_: '',
      department_id: '',
    };

    return this.http.get('https://v2-api.bankopen.co/get_all_members', {
      params: parameters,
    });
  }
  addTeamMember(
    firstName: string | null,
    lastName: string | null,
    emailData: string | null
  ): any {
    return this.http.post(
      'https://v2-api.bankopen.co/add_multiple_member_invite',
      {
        accounts_id: 365418059,
        companies_id: 365418059,
        email_addresses: [
          {
            email_id: emailData,
            first_name: firstName,
            full_name: '',
            last_name: lastName,
            validate: false,
          },
        ],
      }
    );
  }

  deleteMemberApi(deleteMember: number | null): any {
    return this.http.delete(
      'https://v2-api.bankopen.co/delete_member/' + deleteMember,
      {}
    );
  }

  logoutApi() {
    console.log('authservice');
    return this.http.post('https://v2-api.bankopen.co/users/logout', {});
  }
}
