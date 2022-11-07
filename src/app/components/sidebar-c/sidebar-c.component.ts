import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavOption } from '../interfaces/nav-option.ts';

@Component({
  selector: 'app-sidebar-c',
  templateUrl: './sidebar-c.component.html',
  styleUrls: ['./sidebar-c.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarCComponent implements OnInit {

  navOptions: Array<NavOption> = [];

  constructor() { }

  ngOnInit(): void {
    this.navOptions = [
      {
        optionTitle: "home",
        optionUrl: "/",
        optionIconName: "home",
      },
      {
        optionTitle: "notification",
        optionUrl: "/notifications",
        optionIconName: "notifications",
      },
      {
        optionTitle: "messages",
        optionUrl: "/messages",
        optionIconName: "message",
      },
      {
        optionTitle: "settings",
        optionUrl: "/settings",
        optionIconName: "settings",
      },
    ]
  }

}
