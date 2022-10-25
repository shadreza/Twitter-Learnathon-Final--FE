import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthLComponent } from './layouts/auth-l/auth-l.component';
import { DashboardLComponent } from './layouts/dashboard-l/dashboard-l.component';
import { LoginCComponent } from './modules/auth-m/login-c/login-c.component';
import { SignupCComponent } from './modules/auth-m/signup-c/signup-c.component';
import { DashboardCComponent } from './modules/dashboard-m/dashboard-c/dashboard-c.component';

const routes: Routes = [

  // AppRoutes
  {
    path: '',
    component: DashboardLComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: DashboardCComponent
      }
    ]
  },

  // Auth Routes
  {
    path: '',
    component: AuthLComponent,
    children: [
      {
        path: 'login',
        pathMatch: 'full',
        component: LoginCComponent
      },
      {
        path: 'signup',
        pathMatch: 'full',
        component: SignupCComponent
      },
    ]
  },



    // {path: '', pathMatch: 'full', component: FeedsCComponent}, // Route Guard
    // {path: 'home', pathMatch: 'full', component: FeedsCComponent},
    // {path: 'login', pathMatch: 'full', component: LoginCComponent},
    // {path: 'signup', pathMatch: 'full', component: SignupCComponent},
    // {path: '**', component: NotFoundComponent}, //Wild Card Route for 404 request, must be in bottom
    // loadChildren:() => import('./login/login.module').then(_ => _.LoginModule)  // for lazy-loading of that module
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
