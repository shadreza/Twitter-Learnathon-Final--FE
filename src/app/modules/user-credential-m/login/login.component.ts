import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Modal } from 'src/app/components/interfaces/modal';

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
  userMailStatus: string = ''
  passwordStatus: string = ''

  errMsgModal: Modal = {
    modalTitle: "",
    modalDescription: "",
    bothAcceptAndCancel: false
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.loginUserForm = this.formBuilder.group({
      userMail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginUserForm.invalid) {
      this.userMailStatus = this.loginUserForm.controls['userMail'].status
      this.passwordStatus = this.loginUserForm.controls['password'].status
    } else {
      console.log(JSON.stringify(this.loginUserForm.value, null, 2));
    }
  }

}
