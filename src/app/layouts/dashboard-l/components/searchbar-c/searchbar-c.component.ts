import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-searchbar-c',
  templateUrl: './searchbar-c.component.html',
  styleUrls: ['./searchbar-c.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchbarCComponent implements OnInit {

  @Input() props!: string;

  styleClass: string = ''

  constructor() { }

  ngOnInit(): void {
    if (this.props === 'mdCrossed') {
      this.styleClass = 'w-64 hidden md:block'
    } else if (this.props === 'mdNotCrossed') {
      this.styleClass = 'w-62 block md:hidden ml-2 mb-2'
    }
  }

}
