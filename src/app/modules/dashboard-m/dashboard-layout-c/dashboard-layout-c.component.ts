import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout-c',
  templateUrl: './dashboard-layout-c.component.html',
  styleUrls: ['./dashboard-layout-c.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardLayoutCComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
