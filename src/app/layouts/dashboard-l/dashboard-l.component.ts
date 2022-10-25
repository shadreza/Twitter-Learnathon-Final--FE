import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-l',
  templateUrl: './dashboard-l.component.html',
  styleUrls: ['./dashboard-l.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardLComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
