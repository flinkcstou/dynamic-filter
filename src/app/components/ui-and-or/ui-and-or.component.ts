import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AndOrEnum } from 'src/app/components/models/AndOrEnum';

@Component({
  selector: 'app-ui-and-or',
  templateUrl: './ui-and-or.component.html',
  styleUrls: ['./ui-and-or.component.scss']
})
export class UiAndOrComponent implements OnInit {

  @Input() andOr: AndOrEnum = AndOrEnum.AND;
  @Input() isBracket = false;
  @Output() emitAndOr: EventEmitter<AndOrEnum> = new EventEmitter<AndOrEnum>();
  @Output() emitBracket: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  changeAndOr(): void {
    this.andOr = this.andOr === AndOrEnum.AND ? AndOrEnum.OR : AndOrEnum.AND;
    this.emitAndOr.emit(this.andOr);
  }

  changeBracket(): void {
    this.isBracket = !this.isBracket;
    this.emitBracket.emit(this.isBracket);
  }
}
