import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Modal } from 'src/app/interfaces/modal';
import { ModalSService } from 'src/app/services/modal/modal-s.service';

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

  constructor(private formBuilder: FormBuilder, private modal: ModalSService) { }


  ngOnInit(): void {

    this.loginUserForm = this.formBuilder.group({
      userMail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginUserForm.invalid) {
      this.LoginMsgModal.modalTitle = "Failed"
      this.LoginMsgModal.modalDescription = "Credentials are not correct. Please try again..."
      this.LoginMsgModal.modalResult = "failure"
      this.modal.setModal(this.LoginMsgModal, true)
    } else {
      this.LoginMsgModal.modalTitle = "Success"
      this.LoginMsgModal.modalDescription = "You logged in awesomely. Have a great tour..."
      this.LoginMsgModal.modalResult = "success"
      this.modal.setModal(this.LoginMsgModal, true)
    }
  }

}
