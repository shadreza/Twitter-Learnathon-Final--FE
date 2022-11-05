import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NavOption } from '../interfaces/nav-option.ts';

@Component({
  selector: 'app-nav-option-c',
  templateUrl: './nav-option-c.component.html',
  styleUrls: ['./nav-option-c.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavOptionCComponent implements OnInit {

  constructor() { }

  @Input() props!: NavOption;
  title:string = "";
  url:string = "";
  iconName:string = "";

  ngOnInit(): void {
    this.title = this.props.optionTitle
    this.url = this.props.optionUrl
    this.iconName = this.props.optionIconName
  }

}
