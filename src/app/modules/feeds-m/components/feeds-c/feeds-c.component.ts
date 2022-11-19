import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-feeds-c',
  templateUrl: './feeds-c.component.html',
  styleUrls: ['./feeds-c.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeedsCComponent implements OnInit {

  feedsLoaded: boolean = false
  feeds: Array<string> = []

  constructor() { }

  ngOnInit(): void {
    if (this.feedsLoaded) {

    } else {
      this.feeds = ["", "", ""]
    }
  }

}
