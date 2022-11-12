import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalSService } from 'src/app/services/modal/modal-s.service';
import { Modal } from '../interfaces/modal';

@Component({
  selector: 'app-modal-c',
  templateUrl: './modal-c.component.html',
  styleUrls: ['./modal-c.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalCComponent implements OnInit {

  showModalOrNot: boolean = false;

  modalOption: Modal = {
    modalTitle : "",
    modalDescription : "",
    bothAcceptAndCancel: false,
    modalInitiator: "",
    modalResult: ""
  }

  title:string = "";
  description:string = "";
  initiator:string = "";
  result:string = "";
  bothBtn: boolean = false;

  message: string = "";

  constructor(private modal: ModalSService) { }

  ngOnInit(): void {
    this.modal.currentMessage.subscribe(message => this.message = message)
    this.modal.currentModalOption.subscribe(modalOpt => {
      this.modalOption = modalOpt
      this.title = this.modalOption.modalTitle
      this.description = this.modalOption.modalDescription
      this.bothBtn = this.modalOption.bothAcceptAndCancel
      this.initiator = this.modalOption.modalInitiator
      this.result = this.modalOption.modalResult
    })
    this.modal.currentVisibilityStateOfModal.subscribe(visibilityState => this.showModalOrNot = visibilityState)
  }

  cancelModal(): boolean {
    this.modal.clearModal()
    return false
  }

  acceptModal(): boolean {
    this.modal.clearModal()
    return true
  }

}
