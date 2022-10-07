import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FormRegisterSimpleInlineComponent } from './form-register-simple-inline/form-register-simple-inline.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { FormRegisterCompanyComponent } from './form-register-company/form-register-company.component';
import { FormDevisComponent } from './form-devis/form-devis.component';

@NgModule({
  declarations: [
    FormRegisterSimpleInlineComponent,
    FormContactComponent,
    FormRegisterCompanyComponent,
    FormDevisComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    FormRegisterSimpleInlineComponent,
    FormContactComponent,
    FormRegisterCompanyComponent,
    FormDevisComponent
  ]
})
export class ActionsModule {}
