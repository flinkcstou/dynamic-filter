import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiChipComponent } from './components/ui-chip/ui-chip.component';
import { UiBracketComponent } from './components/ui-bracket/ui-bracket.component';
import { FilterComponent } from './components/filter/filter.component';
import { UiAndOrComponent } from './components/ui-and-or/ui-and-or.component';
import { UiBracketGroupComponent } from './components/ui-bracket-group/ui-bracket-group.component';

@NgModule({
  declarations: [
    AppComponent,
    UiChipComponent,
    UiBracketComponent,
    FilterComponent,
    UiAndOrComponent,
    UiBracketGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
