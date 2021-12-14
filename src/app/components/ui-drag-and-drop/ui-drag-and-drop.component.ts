import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Bracket } from 'src/app/components/models/Bracket';


@Component({
  selector: 'app-ui-drag-and-drop',
  templateUrl: './ui-drag-and-drop.component.html',
  styleUrls: ['./ui-drag-and-drop.component.scss']
})
export class UiDragAndDropComponent {

  @Input() brackets: Bracket[];

  @ContentChild('header', {static: false}) headerTemplateRef: TemplateRef<any>;

  identify(index, bracket: Bracket): string {
    return bracket.id;
  }

  drop(event: CdkDragDrop<any>): void {
    this.brackets[event.previousContainer.data.index] = event.container.data.item;
    this.brackets[event.container.data.index] = event.previousContainer.data.item;
  }



}
