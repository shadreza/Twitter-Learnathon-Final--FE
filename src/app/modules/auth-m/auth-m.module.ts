import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginCComponent } from './login-c/login-c.component';
import { SignupCComponent } from './signup-c/signup-c.component';



@NgModule({
  declarations: [
    LoginCComponent,
    SignupCComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthMModule { }
