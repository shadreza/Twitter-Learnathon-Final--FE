import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Modal } from 'src/app/interfaces/modal';
import { ModalSService } from 'src/app/services/modal/modal-s.service';
import { UserSService } from 'src/app/services/user/user-s.service';
import {Credentials} from '../../../creds'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loginUserForm: FormGroup = new FormGroup({
    'userMail' : new FormControl(''),
    'password' : new FormControl(''),
  });

  submitted: boolean = false;

  LoginMsgModal: Modal = {
    modalTitle: "",
    modalDescription: "",
    bothAcceptAndCancel: false,
    modalInitiator: "login",
    modalResult: ""
  }

  invalidLogin: boolean = true;
  userCurrent: string = '';

  constructor(private formBuilder: FormBuilder, private modal: ModalSService, private http: HttpClient, private router : Router, private user: UserSService) { }


  ngOnInit(): void {

    this.loginUserForm = this.formBuilder.group({
      userMail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.user.currentUser.subscribe(user => this.userCurrent = user)

  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginUserForm.invalid) {
      this.LoginMsgModal.modalTitle = "Failed"
      this.LoginMsgModal.modalDescription = "Credentials are not correct. Please try again..."
      this.LoginMsgModal.modalResult = "failure"
      this.modal.setModal(this.LoginMsgModal, true)
      this.user.userClear()
    } else {

      this.http.post(Credentials.BASE_API_ENDPOINT, this.loginUserForm)
        .subscribe(res => {
          const token = (<any>res).token
          localStorage.setItem('jwt', token)
          this.user.userLoggedIn(token)
          this.invalidLogin = false
          this.router.navigate(['/'])
        }, err => {
          this.user.userClear()
          this.invalidLogin = true
        })

      this.LoginMsgModal.modalTitle = "Success"
      this.LoginMsgModal.modalDescription = "You logged in awesomely. Have a great tour..."
      this.LoginMsgModal.modalResult = "success"
      this.modal.setModal(this.LoginMsgModal, true)
    }
  }

}
