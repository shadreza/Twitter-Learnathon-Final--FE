import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutCComponent } from './dashboard-layout-c/dashboard-layout-c.component';
import { AppRoutingModule } from './dashboard-m-routing.module';



@NgModule({
  declarations: [
    DashboardLayoutCComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class DashboardMModule { }
