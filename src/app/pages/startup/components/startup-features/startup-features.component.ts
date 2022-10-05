import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-startup-features',
  templateUrl: './startup-features.component.html',
  styleUrls: ['./startup-features.component.scss']
})
export class StartupFeaturesComponent implements OnInit {
  elements = [
    { icon: 'phone', title: 'Téléphonie Fixe PRO' },
    { icon: 'user', title: 'Standard Téléphonique' },
    { icon: 'smartphone', title: 'Téléphonie Mobile PRO' },
    { icon: 'bar-chart', title: 'CRM en Ligne' },
    { icon: 'message-circle', title: 'Numéro Spécial & SMS+' },
    { icon: 'hard-drive', title: 'API & Serveurs' }
  ];

  constructor() {}

  ngOnInit() {}
}
