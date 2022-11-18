import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NavOptionI } from 'src/app/interfaces/nav-option-i';

@Component({
  selector: 'app-nav-option-c',
  templateUrl: './nav-option-c.component.html',
  styleUrls: ['./nav-option-c.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavOptionCComponent implements OnInit {

  constructor() { }

  @Input() props!: NavOptionI;
  title:string = "";
  url:string = "";
  iconName: string = "";

  userLoggedIn: boolean = false;

  iconStyle: string = "";

  ngOnInit(): void {

    if (this.props.optionTitle === "login" && this.userLoggedIn) {
      this.iconStyle = "material-icons sm:mr-6 text-indigo-600 rotate-180"
      this.title = "logout";
      this.url = "";
      this.iconName = "logout";
    } else {
      this.iconStyle = "material-icons sm:mr-6 text-indigo-600"
      this.title = this.props.optionTitle
      this.url = this.props.optionUrl
      this.iconName = this.props.optionIconName
    }
  }

}
