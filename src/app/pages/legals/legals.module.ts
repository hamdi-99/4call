import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalsComponent } from './components/legals/legals.component';
import { LegalsLegalsComponent } from './components/legals-legals/legals-legals.component';
import { ShellModule } from '@app/shell/shell.module';
import { FootersModule } from '@app/blocks/footers/footers.module';
import { LegalsRoutingModule } from './legals-routing.module';

@NgModule({
  declarations: [LegalsComponent, LegalsLegalsComponent],
  imports: [CommonModule, FootersModule, ShellModule, LegalsRoutingModule]
})
export class LegalsModule {}
