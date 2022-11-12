import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { GlobalConstants } from 'src/app/gloabalConstants/global-constants';
import { Modal } from '../interfaces/modal';

@Component({
  selector: 'app-modal-c',
  templateUrl: './modal-c.component.html',
  styleUrls: ['./modal-c.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalCComponent implements OnInit {

  showModal: boolean = GlobalConstants.isModalLive;

  @Input() props!: Modal;
  title:string = "";
  description:string = "";
  bothBtn:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.title = this.props.modalTitle
    this.description = this.props.modalDescription
    this.bothBtn = this.props.bothAcceptAndCancel
    GlobalConstants.setModalVisibility(true)
    this.showModal = GlobalConstants.isModalLive
  }

  closeModal(): void {
    GlobalConstants.setModalVisibility(false)
    this.showModal = GlobalConstants.isModalLive
  }

}
