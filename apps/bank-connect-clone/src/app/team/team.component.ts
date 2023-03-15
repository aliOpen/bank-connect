import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
// import { Router } from '@angular/router';

@Component({
  selector: 'ali-assignments-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  // showFiller = false;
  @ViewChild('drawer') drawer!: MatDrawer;
  events: string[] = [];
  opened: boolean | undefined;
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(
    window.location.host
  );
}
