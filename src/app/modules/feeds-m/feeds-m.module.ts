import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedsCComponent } from './feeds-c/feeds-c.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FeedCComponent } from './feed-c/feed-c.component';

@NgModule({
  declarations: [
    FeedsCComponent,
    FeedCComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class FeedsMModule { }
