import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DashboardLComponent } from './layouts/dashboard-l/dashboard-l.component';
import { ErrorPageLComponent } from './layouts/error-page-l/error-page-l.component';
import { FeedsCComponent } from './modules/feeds-m/components/feeds-c/feeds-c.component';
import { FriendsCComponent } from './modules/friends-m/components/friends-c/friends-c.component';
import { NotificationsCComponent } from './modules/notifications-m/components/notifications-c/notifications-c.component';
import { SettingsCComponent } from './modules/settings-m/components/settings-c/settings-c.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLComponent,
    children: [
      { path: '', component: FeedsCComponent},
      { path: 'friends', component: FriendsCComponent },
      { path: 'notifications', component: NotificationsCComponent },
      { path: 'settings', component: SettingsCComponent },
    ]
  },
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
