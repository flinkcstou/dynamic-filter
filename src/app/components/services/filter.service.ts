import { Injectable } from '@angular/core';
import { createDefaultDynamicFilters, createDefaultFilter, Filter } from 'src/app/components/models/Filter';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Bracket } from 'src/app/components/models/Bracket';
import { AndOrEnum } from 'src/app/components/models/AndOrEnum';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  // tslint:disable-next-line:variable-name
  private filterSubject: BehaviorSubject<Filter> = new BehaviorSubject<Filter>(createDefaultFilter());
  public readonly filter$: Observable<Filter> = this.filterSubject.asObservable();

  constructor() {
  }

  get value() {
    return this.filterSubject.value;
  }

  create(): Bracket {

    return createDefaultBracket();

    function createDefaultBracket(): Bracket {
      return {
        id: 'xd8uAmBx9C3vhzcE' + (Math.random() + 1000) * 10,
        andOr: AndOrEnum.AND,
        dynamicFilters: createDefaultDynamicFilters(),
        brackets: []
      };
    }

    function createDefaultBracket1(): Bracket {
      return {
        id: 'xd8uAmBx9C3vhzcE' + (Math.random() + 1000) * 10,
        andOr: AndOrEnum.AND,
        dynamicFilters: [],
        brackets: [
          {
            id: 'xd8uAmBx9C3vhzcE' + (Math.random() + 1000) * 10,
            andOr: AndOrEnum.AND,
            dynamicFilters: createDefaultDynamicFilters(),
            brackets: []
          },
          {
            id: 'xd8uAmBx9C3vhzcE' + (Math.random() + 1000) * 10,
            andOr: AndOrEnum.AND,
            dynamicFilters: createDefaultDynamicFilters(),
            brackets: []
          },
          {
            id: 'xd8uAmBx9C3vhzcE' + (Math.random() + 1000) * 10,
            andOr: AndOrEnum.AND,
            dynamicFilters: createDefaultDynamicFilters(),
            brackets: []
          }
        ]
      };
    }


  }

  addBracket(): any {
    this.value.brackets.push(this.create());
  }
}
