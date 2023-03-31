import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ali-assignments-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  userName: string;
  constructor() {
    this.userName = this.getUserName();
  }

  ngOnInit(): void {
    console.log('GET  USERNAME FROM EMAIL');
    this.getUserName();
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
}
