import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavOptionI } from 'src/app/interfaces/nav-option-i';

@Component({
  selector: 'app-sidebar-c',
  templateUrl: './sidebar-c.component.html',
  styleUrls: ['./sidebar-c.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarCComponent implements OnInit {

  navOptions: Array<NavOptionI> = [];

  constructor() { }

  ngOnInit(): void {
    this.navOptions = [
      {
        optionTitle: "home",
        optionUrl: "/",
        optionIconName: "home",
      },
      {
        optionTitle: "notifications",
        optionUrl: "/notifications",
        optionIconName: "notifications",
      },
      {
        optionTitle: "friends",
        optionUrl: "/friends",
        optionIconName: "people",
      },
      {
        optionTitle: "settings",
        optionUrl: "/settings",
        optionIconName: "settings",
      },
      {
        optionTitle: "login",
        optionUrl: "/auth/login",
        optionIconName: "login",
      },
    ]
  }

}
