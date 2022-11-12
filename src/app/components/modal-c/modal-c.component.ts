import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalGlobalConstants } from 'src/app/gloabalConstants/modal-global-constants';

@Component({
  selector: 'app-modal-c',
  templateUrl: './modal-c.component.html',
  styleUrls: ['./modal-c.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalCComponent implements OnInit {

  showModal: boolean = ModalGlobalConstants.isModalLive;

  title:string = "";
  description:string = "";
  bothBtn:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.title = ModalGlobalConstants.modalOptions.modalTitle
    this.description = ModalGlobalConstants.modalOptions.modalDescription
    this.bothBtn = ModalGlobalConstants.modalOptions.bothAcceptAndCancel
    this.showModal = ModalGlobalConstants.isModalLive
  }

  cancelModal(): boolean {
    ModalGlobalConstants.clearModal()
    this.showModal = ModalGlobalConstants.isModalLive
    return false
  }

  acceptModal(): boolean {
    ModalGlobalConstants.clearModal()
    this.showModal = ModalGlobalConstants.isModalLive
    return true
  }

}
