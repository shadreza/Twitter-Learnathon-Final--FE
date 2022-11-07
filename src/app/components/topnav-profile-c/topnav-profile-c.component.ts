import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-topnav-profile-c',
  templateUrl: './topnav-profile-c.component.html',
  styleUrls: ['./topnav-profile-c.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopnavProfileCComponent implements OnInit {

  constructor() { }

  userId: string = " ";
  userName: string = "KronoFaze";
  userPicture: string = "https://avatars.githubusercontent.com/u/25461012?v=4";

  ngOnInit(): void {
  }

}
