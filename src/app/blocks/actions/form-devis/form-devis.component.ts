import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-form-devis',
  templateUrl: './form-devis.component.html',
  styleUrls: ['./form-devis.component.scss']
})
export class FormDevisComponent implements OnInit {
  obj = {
    0: 'Téléphonie Fixe',
    1: 'Téléphonie Mobile',
    2: 'Standard Téléphonique',
    3: 'CRM et/ou VoIP',
    4: 'Numéro Spécial et/ou SMS+',
    5: 'API, Serveur, Interface Graphique...'
  };

  constructor() {}

  ngOnInit(): void {}
}
