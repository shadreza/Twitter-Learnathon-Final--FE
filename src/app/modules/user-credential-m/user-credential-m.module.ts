import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotSthLoginCComponent } from './forgot-sth-login-c/forgot-sth-login-c.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotSthLoginCComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserCredentialMModule { }
