import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
  increment = 1;

  constructor() {
  }

  get value(): Filter {
    return this.filterSubject.value;
  }

  removeDynamicFilter(bracket: Bracket): void {
    this.removeInnerDynamicFilter(bracket.id, bracket.parentIds, 0, this.value, () => 1);
  }

  removeInnerDynamicFilter(id: string, parentIds: string[] = [], level: number, bracket: Bracket | Filter, unBracket: () => void): void {
    if (!id) {
      throw new Error('id is null');
    }
    const parentId = parentIds[level];
    if (!parentId) {
      bracket.brackets = bracket.brackets.filter(b => b.id !== id);
      if (bracket.brackets.length === 1) {
        unBracket();
      }
      return;
    }
    level++;
    const bracketNext = bracket.brackets.find(b => b.id === parentId);
    this.removeInnerDynamicFilter(id, parentIds, level, bracketNext, () => {
      bracket.brackets = bracket.brackets.filter(b => b.id !== bracketNext.id);
      bracketNext.brackets.forEach(b => b.parentIds.pop());
      bracket.brackets.push(...bracketNext.brackets);
    });
  }

  joinBracket(bracket: Bracket): void {
    this.joinInnerBracket(bracket.id, bracket.parentIds, 0, this.value);

  }

  joinInnerBracket(id: string, parentIds: string[], level: number, bracket: Bracket | Filter): void {
    if (!id) {
      throw new Error('id is null');
    }
    const parentId = parentIds[level];
    if (!parentId && bracket.brackets.find(b => b.id === id).brackets.length) {
      const bIndex = bracket.brackets.findIndex(b => b.id === id);
      const bCurrent = bracket.brackets[bIndex];
      const bNextIndex = bIndex + 1;
      const bNext = {...bracket.brackets[bNextIndex], parentIds: [...bCurrent.parentIds, bCurrent.id]};
      if (!bNext.brackets.length) {
        bCurrent.brackets.push(bNext);
      } else {
        bNext.brackets.forEach(b => {
          b.parentIds = [...bCurrent.parentIds, bCurrent.id];
        });
        bCurrent.brackets.push(...bNext.brackets);
      }
      bracket.brackets.splice(bNextIndex, 1);
      return;
    } else if (!parentId) {
      const bIndex = bracket.brackets.findIndex(b => b.id === id);
      const bNextIndex = bIndex + 1;
      const bNew = this.createWithoutDynamicFilters([...bracket.brackets[bIndex].parentIds]);
      const bCurrent = {...bracket.brackets[bIndex], parentIds: [...bNew.parentIds, bNew.id]};
      const bNext = {...bracket.brackets[bNextIndex], parentIds: [...bNew.parentIds, bNew.id]};
      if (!bNext.brackets.length) {
        bNew.brackets = [bCurrent, bNext];
      } else {
        bNext.brackets.forEach(b => {
          b.parentIds = [...bNew.parentIds, bNew.id];
        });
        bNew.brackets = [bCurrent, ...bNext.brackets];
      }
      bracket.brackets.splice(bIndex, 2, bNew);
      return;
    }

    level++;
    const bracketNext = bracket.brackets.find(b => b.id === parentId);
    this.joinInnerBracket(id, parentIds, level, bracketNext);
  }


  unPackBracket(bracket: Bracket): void {
    this.unPackInnerBracket(bracket.id, bracket.parentIds, 0, this.value);
  }

  unPackInnerBracket(id: string, parentIds: string[], level: number, bracket: Bracket | Filter): void {
    if (!id) {
      throw new Error('id is null');
    }
    const parentId = parentIds[level];

    if (!parentId) {
      const bIndex = bracket.brackets.findIndex(b => b.id === id);
      const bCurrent = bracket.brackets[bIndex];
      bCurrent.brackets.forEach(b => b.parentIds = [...bCurrent.parentIds]);
      const bInnerCurrents = [...bCurrent.brackets];
      bracket.brackets.splice(bIndex, 1, ...bInnerCurrents);
      return;
    }

    level++;
    const bracketNext = bracket.brackets.find(b => b.id === parentId);
    this.unPackInnerBracket(id, parentIds, level, bracketNext);
  }

  create(parentIds: string[]): Bracket {

    return {
      id: 'bracketId' + (Math.random() + 1000) * 10,
      parentIds: [...parentIds],
      andOr: AndOrEnum.AND,
      dynamicFilters: createDefaultDynamicFilters(this.increment++),
      brackets: []
    };

  }

  createWithoutDynamicFilters(parentIds: string[]): Bracket {

    return {
      id: 'bracketId' + (Math.random() + 1000) * 10,
      parentIds: [...parentIds],
      andOr: AndOrEnum.AND,
      dynamicFilters: [],
      brackets: []
    };

  }

  addBracket(): any {
    this.value.brackets.push(this.create([]));
  }
}
