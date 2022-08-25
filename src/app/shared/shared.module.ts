import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { ModulesModule } from './modules/modules.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ComponentsModule, ModulesModule],
})
export class SharedModule {}
