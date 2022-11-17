import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSService {

  private userSource = new BehaviorSubject<string>("")

  userClear(): void {
    this.userSource.next("")
  }


  currentUser = this.userSource.asObservable()

  userLoggedIn(userId: string): void {
    this.userSource.next(userId)
    this.router.navigate(["/"])
  }

  userStatus(): void {

  }

  userLoggedOut(userId: string): void {
    this.userSource.next("")
  }

  constructor( private router: Router) { }
}
