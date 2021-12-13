import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bracket } from 'src/app/components/models/Bracket';
import { FilterService } from 'src/app/components/services/filter.service';

@Component({
  selector: 'app-ui-bracket',
  templateUrl: './ui-bracket.component.html',
  styleUrls: ['./ui-bracket.component.scss']
})
export class UiBracketComponent implements OnInit {

  @Input() bracket: Bracket;
  @Input() isLast;
  @Output() removeBracketGroup: EventEmitter<Bracket> = new EventEmitter<Bracket>();


  constructor(private filterService: FilterService) {
  }

  ngOnInit(): void {
  }

  removeBracket(bracket: Bracket): any {
    this.filterService.value.brackets = this.filterService.value.brackets.filter(b => b.id !== bracket.id);
  }

  joinBracket($event: boolean, bracket: Bracket): void {

  }
}
