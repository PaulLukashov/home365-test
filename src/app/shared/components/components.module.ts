import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModulesModule } from 'Shared/modules/modules.module';
import { ModalComponent } from './modal/modal.component';
import { SelectStatusComponent } from './select-status/select-status.component';

@NgModule({
  declarations: [ModalComponent, SelectStatusComponent],
  imports: [CommonModule, ModulesModule],
  exports: [ModalComponent, SelectStatusComponent],
})
export class ComponentsModule {}
