import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesCComponent } from './messages-c/messages-c.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    MessagesCComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class MessagesMModule { }
