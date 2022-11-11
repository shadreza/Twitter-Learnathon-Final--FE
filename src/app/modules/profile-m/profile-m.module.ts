import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCComponent } from './profile-c/profile-c.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    ProfileCComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ProfileMModule { }
