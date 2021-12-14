import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-ui-test-drag-and-drop',
  templateUrl: './ui-test-drag-and-drop.component.html',
  styleUrls: ['./ui-test-drag-and-drop.component.scss']
})
export class UiTestDragAndDropComponent implements OnInit {

  items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  constructor() {
  }

  ngOnInit(): void {
  }


  drop(event: CdkDragDrop<any>): void {
    this.items[event.previousContainer.data.index] = event.container.data.item;
    this.items[event.container.data.index] = event.previousContainer.data.item;
  }

}
