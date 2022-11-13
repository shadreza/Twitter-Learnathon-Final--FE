import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedsCComponent } from './feeds-c/feeds-c.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PostCComponent } from './post-c/post-c.component';

@NgModule({
  declarations: [
    FeedsCComponent,
    PostCComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class FeedsMModule { }
