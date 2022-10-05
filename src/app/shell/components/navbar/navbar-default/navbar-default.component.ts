import { Component, OnInit, Input } from '@angular/core';
import {
  faSignInAlt,
  faUserPlus,
  faMobileAlt,
  faBlenderPhone
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dc-navbar-default',
  templateUrl: './navbar-default.component.html',
  styleUrls: ['./navbar-default.component.scss']
})
export class NavbarDefaultComponent implements OnInit {
  @Input()
  useOnlyDarkLogo: boolean;

  @Input()
  darkLinks: boolean;

  @Input()
  position: string;

  signInAlt = faSignInAlt;
  userPlus = faUserPlus;
  mobile = faMobileAlt;

  constructor() {}

  ngOnInit() {}

  isRightPositioned() {
    return this.position === 'right';
  }
}
