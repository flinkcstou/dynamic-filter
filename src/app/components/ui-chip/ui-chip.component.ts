import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ui-chip',
  templateUrl: './ui-chip.component.html',
  styleUrls: ['./ui-chip.component.scss']
})
export class UiChipComponent implements OnInit {

  @Input() text = 'text';

  @Output() closeEmit: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
