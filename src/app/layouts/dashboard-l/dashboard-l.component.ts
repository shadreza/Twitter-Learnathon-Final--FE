import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Modal } from 'src/app/components/interfaces/modal';

@Component({
  selector: 'app-dashboard-l',
  templateUrl: './dashboard-l.component.html',
  styleUrls: ['./dashboard-l.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardLComponent implements OnInit {

  modalOptions: Modal = {
    modalTitle: 'Dashboard',
    modalDescription: 'Dashboard Description',
    bothAcceptAndCancel: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
