import { Injectable } from '@angular/core';
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
  }

  userStatus(): void {

  }

  userLoggedOut(userId: string): void {
    this.userSource.next("")
  }

  constructor() { }
}
