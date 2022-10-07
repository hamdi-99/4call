import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevisComponent } from './component/devis/devis.component';
import { DevisFormComponent } from './component/devis-form/devis-form.component';
import { DevisOtherChannelsComponent } from './component/devis-other-channels/devis-other-channels.component';
import { SharedModule } from '@app/shared';
import { FootersModule } from '@app/blocks/footers/footers.module';
import { ActionsModule } from '@app/blocks/actions/actions.module';
import { DevisRoutingModule } from './devis-routing.module';

@NgModule({
  declarations: [
    DevisComponent,
    DevisFormComponent,
    DevisOtherChannelsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FootersModule,
    ActionsModule,
    DevisRoutingModule
  ]
})
export class DevisModule {}
