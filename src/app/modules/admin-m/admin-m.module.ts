import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCComponent } from './admin-c/admin-c.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    AdminCComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class AdminMModule { }
