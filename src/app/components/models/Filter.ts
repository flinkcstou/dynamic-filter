import { FilterFieldBo } from 'src/app/components/models/FilterFieldBo';
import { FilterFieldTypeEnum } from 'src/app/components/models/FilterFieldTypeEnum';
import { Bracket } from 'src/app/components/models/Bracket';
import { AndOrEnum } from 'src/app/components/models/AndOrEnum';

export enum FilterTypeEnum {
  MENU_ITEM = 'MENU-ITEM',
  BUSINESS_FIELD = 'BUSINESS_FIELD',
}

export class Filter {

  id: string;
  boId: string;
  fieldId: string;
  type: FilterTypeEnum;
  brackets: Bracket[];

}

export function createDefaultFilter(): Filter {
  return {
    id: 'xd8uAmBx9C3vhzcE',
    boId: 'uin62jOaBJeMgg49',
    fieldId: 'zin62jOaBJeMgg4z',
    type: FilterTypeEnum.BUSINESS_FIELD,
    brackets: createDefaultBrackets(),
  };
}

export function createDefaultBrackets(): Bracket[] {
  return [
    {
      id: 'xd8uAmBx9C3vhzcE1',
      andOr: AndOrEnum.AND,
      dynamicFilters: createDefaultDynamicFilters(),
      brackets: []
    },
    {
      id: 'xd8uAmBx9C3vhzcE2',
      andOr: AndOrEnum.OR,
      dynamicFilters: createDefaultDynamicFilters(),
      brackets: []
    },
    {
      id: 'xd8uAmBx9C3vhzcE3',
      andOr: AndOrEnum.AND,
      dynamicFilters: [],
      brackets: [
        {
          id: 'xd8uAmBx9C3vhzcE4',
          andOr: AndOrEnum.AND,
          dynamicFilters: createDefaultDynamicFilters(),
          brackets: []
        },
        {
          id: 'xd8uAmBx9C3vhzcE5',
          andOr: AndOrEnum.AND,
          dynamicFilters: createDefaultDynamicFilters(),
          brackets: []
        },
        {
          id: 'xd8uAmBx9C3vhzcE6',
          andOr: AndOrEnum.AND,
          dynamicFilters: createDefaultDynamicFilters(),
          brackets: []
        }
      ]
    },
  ];
}

export function createDefaultDynamicFilters(): FilterFieldBo[] {
  return [
    {
      id: 'dynamicFilter1',
      value: 'input text value 1',
      type: FilterFieldTypeEnum.INPUT_TEXT,
      fieldId: 'fieldId1',
      intFrom: null,
      intTo: null,
    },
    {
      id: 'dynamicFilter2',
      value: 'input text value 2',
      type: FilterFieldTypeEnum.INPUT_TEXT,
      fieldId: 'fieldId2',
      intFrom: null,
      intTo: null,
    },
    {
      id: 'dynamicFilter3',
      value: 'input text value 3',
      type: FilterFieldTypeEnum.INPUT_TEXT,
      fieldId: 'fieldId3',
      intFrom: null,
      intTo: null,
    }
  ];
}
