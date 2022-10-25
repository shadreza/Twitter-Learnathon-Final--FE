import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthLayoutCComponent } from './auth-layout-c/auth-layout-c.component';
import { LoginCComponent } from './login-c/login-c.component';
import { SignupCComponent } from './signup-c/signup-c.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutCComponent,
    children: [
      { path: 'login', component: LoginCComponent, pathMatch: 'full' },
      { path: 'signup', component: SignupCComponent, pathMatch: 'full'}
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
