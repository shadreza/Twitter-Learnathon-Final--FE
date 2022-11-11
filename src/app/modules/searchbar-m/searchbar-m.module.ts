import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarCComponent } from './searchbar-c/searchbar-c.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    SearchbarCComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    SearchbarCComponent
  ]
})
export class SearchbarMModule { }
