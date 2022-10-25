import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginCComponent } from './login-c/login-c.component';
import { SignupCComponent } from './signup-c/signup-c.component';
import { AuthLayoutCComponent } from './auth-layout-c/auth-layout-c.component';
import { AppRoutingModule } from './auth-m-routing.module';



@NgModule({
  declarations: [
    LoginCComponent,
    SignupCComponent,
    AuthLayoutCComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AuthMModule { }
