import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-c',
  templateUrl: './profile-c.component.html',
  styleUrls: ['./profile-c.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileCComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute) { }

  userName: string = "";

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      this.userName = String(params.get('userName'))
    });
  }

}
