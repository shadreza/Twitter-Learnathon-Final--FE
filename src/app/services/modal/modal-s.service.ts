import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Modal } from 'src/app/interfaces/modal';


@Injectable({
  providedIn: 'root'
})

export class ModalSService {

  constructor(private router: Router) { }

  private messageSource = new BehaviorSubject<string>("default message")
  private isModalLiveSource = new BehaviorSubject<boolean>(false)
  static emptyModalOption: Modal = {
    modalTitle : "",
    modalDescription : "",
    bothAcceptAndCancel: false,
    modalInitiator: "",
    modalResult: ""
  }

  private initiator: string= ""
  private result: string= ""

  private modalOptionSource = new BehaviorSubject<Modal>(ModalSService.emptyModalOption)

  currentMessage = this.messageSource.asObservable()
  currentVisibilityStateOfModal = this.isModalLiveSource.asObservable()
  currentModalOption = this.modalOptionSource.asObservable()

  delay = (ms: number) => new Promise(res => setTimeout(res, ms))
  modalTTL:number = 2500

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  clearModal(): void {
    this.modalOptionSource.next(ModalSService.emptyModalOption)
    this.isModalLiveSource.next(false)
  }

  async setModalVisibility(setBool: boolean): Promise<void> {
    this.isModalLiveSource.next(setBool)
    await this.delay(this.modalTTL)
    this.isModalLiveSource.next(false)
  }

  async setModal(modalToSet: Modal, setVisibility: boolean): Promise<void> {
    this.modalOptionSource.next(modalToSet)
    this.setModalVisibility(setVisibility)
    this.initiator = this.modalOptionSource.value.modalInitiator
    this.result = this.modalOptionSource.value.modalResult
    await this.delay(this.modalTTL)
    this.isModalLiveSource.next(false)
    if (this.initiator === 'login' && this.result === 'success') {
      this.router.navigateByUrl('/')
    }
    if (this.initiator === 'signup' && this.result === 'success') {
      this.router.navigateByUrl('/')
    }
  }

}
