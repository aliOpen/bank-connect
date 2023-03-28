import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamComponent } from './team/team.component';
import { AuthGuard } from './auth.guard';
import { ViewComponent } from './view/view.component';
import { LoginGuard } from './login.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'team',
    component: TeamComponent,
    canActivate: [AuthGuard],
    // children: [{ path: ':id', component: ViewComponent }],
  },
  { path: 'team/view/:id', component: ViewComponent, canActivate: [AuthGuard] },
];
export default appRoutes;
