import { AppRoutingModule } from 'src/app/app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsCComponent } from './settings-c/settings-c.component';



@NgModule({
  declarations: [
    SettingsCComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SettingsMModule { }
