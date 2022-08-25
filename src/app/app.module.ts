import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'Shared/shared.module';
import { AppComponent } from './app.component';
import { PropertiesListFiltersComponent } from './properties-list/properties-list-filters/properties-list-filters.component';
import { PropertiesListComponent } from './properties-list/properties-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertiesListComponent,
    PropertiesListFiltersComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
