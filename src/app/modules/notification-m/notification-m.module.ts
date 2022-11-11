import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationCComponent } from './notification-c/notification-c.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    NotificationCComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class NotificationMModule { }
