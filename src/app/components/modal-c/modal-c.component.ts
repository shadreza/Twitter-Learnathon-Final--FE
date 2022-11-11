import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Modal } from '../interfaces/modal';

@Component({
  selector: 'app-modal-c',
  templateUrl: './modal-c.component.html',
  styleUrls: ['./modal-c.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalCComponent implements OnInit {

  @Input() props!: Modal;
  title:string = "";
  description:string = "";

  constructor() { }

  ngOnInit(): void {
    this.title = this.props.modalTitle
    this.description = this.props.modalDescription
  }

}
