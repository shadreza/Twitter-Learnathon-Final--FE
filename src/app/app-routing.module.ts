import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthLComponent } from './layouts/auth-l/auth-l.component';
import { DashboardLComponent } from './layouts/dashboard-l/dashboard-l.component';
import { ErrorPageLComponent } from './layouts/error-page-l/error-page-l.component';
import { LoginComponent } from './modules/user-credential-m/login/login.component';
import { SignupComponent } from './modules/user-credential-m/signup/signup.component';

const routes: Routes = [
  { path: '', component: DashboardLComponent },
  {
    path: 'auth',
    component: AuthLComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login'},
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ]
  },
  { path: '**', component: ErrorPageLComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
