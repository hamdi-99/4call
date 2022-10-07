import { Component, OnInit } from '@angular/core';
import {
  faMapMarker,
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'dc-devis-form',
  templateUrl: './devis-form.component.html',
  styleUrls: ['./devis-form.component.scss']
})
export class DevisFormComponent implements OnInit {
  fa = {
    mapMarker: faMapMarker,
    phone: faPhone,
    envelope: faEnvelope,
    facebook: faFacebook,
    twitter: faTwitter,
    instagram: faInstagram
  };

  constructor() {}

  ngOnInit(): void {}
}
