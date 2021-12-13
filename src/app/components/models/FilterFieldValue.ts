import { FilterFieldBo } from 'src/app/components/models/FilterFieldBo';

export interface FilterFieldValue {

  assignToFilter(filterFieldBo: FilterFieldBo): void;

  toText(): string;
}

export class FilterFieldValueInput implements FilterFieldValue {

  constructor(public value: string) {
  }


  assignToFilter(filterFieldBo: FilterFieldBo): void {
    filterFieldBo.value = this.value;
  }

  toText(): string {
    return this.value;
  }

}
