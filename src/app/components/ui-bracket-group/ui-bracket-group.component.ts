import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bracket } from 'src/app/components/models/Bracket';

@Component({
  selector: 'app-ui-bracket-group',
  templateUrl: './ui-bracket-group.component.html',
  styleUrls: ['./ui-bracket-group.component.scss']
})
export class UiBracketGroupComponent implements OnInit {

  @Input() brackets: Bracket[];
  @Input() isLast = false;

  @Output() closeEmit: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
