import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Bracket } from 'src/app/components/models/Bracket';
import { AndOrEnum } from 'src/app/components/models/AndOrEnum';
import { Filter } from 'src/app/components/models/Filter';
import { createDefaultDynamicFilters, createDefaultFilter } from 'src/app/components/models/CreateDefault';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  // tslint:disable-next-line:variable-name
  private filterSubject: BehaviorSubject<Filter> = new BehaviorSubject<Filter>(createDefaultFilter());
  public readonly filter$: Observable<Filter> = this.filterSubject.asObservable();

  constructor() {
  }

  get value(): Filter {
    return this.filterSubject.value;
  }

  create(parentIds: string[]): Bracket {

    return {
      id: 'bracketId' + (Math.random() + 1000) * 10,
      parentIds: [...parentIds],
      andOr: AndOrEnum.AND,
      dynamicFilters: createDefaultDynamicFilters(),
      brackets: []
    };

  }

  addBracket(): any {
    this.value.brackets.push(this.create([]));
  }
}
