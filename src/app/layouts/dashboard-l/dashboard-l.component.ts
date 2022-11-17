import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserSService } from 'src/app/services/user/user-s.service';

@Component({
  selector: 'app-dashboard-l',
  templateUrl: './dashboard-l.component.html',
  styleUrls: ['./dashboard-l.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardLComponent implements OnInit {

  constructor(private currentUser: UserSService, private router: Router) { }

  user: string = ""

  ngOnInit(): void {

    this.currentUser.currentUser.subscribe(user => this.user = user)

    if (!this.user) {
      this.router.navigate(["/auth/login"])
    }

  }

}
