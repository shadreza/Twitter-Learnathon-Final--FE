import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedsCComponent } from './components/feeds-c/feeds-c.component';
import { FeedCComponent } from './components/feed-c/feed-c.component';



@NgModule({
  declarations: [
    FeedsCComponent,
    FeedCComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeedsMModule { }
