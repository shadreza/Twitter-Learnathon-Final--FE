import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ErrorPageLComponent } from './layouts/error-page-l/error-page-l.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: DashboardLComponent,
  //   children: [
  //     { path: '', component: FeedsCComponent},
  //     { path: 'admin', component: AdminCComponent },
  //     { path: 'notifications', component: NotificationCComponent },
  //     { path: 'profile/:userName', component: ProfileCComponent },
  //   ]
  // },
  // {
  //   path: 'auth',
  //   component: AuthLComponent,
  //   children: [
  //     { path: '', pathMatch: 'full', redirectTo: 'login'},
  //     { path: 'login', component: LoginComponent },
  //     { path: 'signup', component: SignupComponent },
  //     { path: 'forgot', component: ForgotSthLoginCComponent },
  //   ]
  // },
  { path: '**', component: ErrorPageLComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
