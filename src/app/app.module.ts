import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiChipComponent } from './components/ui-chip/ui-chip.component';
import { UiBracketComponent } from './components/ui-bracket/ui-bracket.component';
import { FilterComponent } from './components/filter/filter.component';
import { UiAndOrComponent } from './components/ui-and-or/ui-and-or.component';
import { UiBracketGroupComponent } from './components/ui-bracket-group/ui-bracket-group.component';
import { UiDragAndDropComponent } from './components/ui-drag-and-drop/ui-drag-and-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UiTestDragAndDropComponent } from './components/ui-test-drag-and-drop/ui-test-drag-and-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    UiChipComponent,
    UiBracketComponent,
    FilterComponent,
    UiAndOrComponent,
    UiBracketGroupComponent,
    UiDragAndDropComponent,
    UiTestDragAndDropComponent,
  ],
  exports: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
