import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-messages-c',
  templateUrl: './messages-c.component.html',
  styleUrls: ['./messages-c.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MessagesCComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
