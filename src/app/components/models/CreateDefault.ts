import { Bracket } from 'src/app/components/models/Bracket';
import { AndOrEnum } from 'src/app/components/models/AndOrEnum';
import { FilterFieldBo } from 'src/app/components/models/FilterFieldBo';
import { FilterFieldTypeEnum } from 'src/app/components/models/FilterFieldTypeEnum';
import { Filter, FilterTypeEnum } from 'src/app/components/models/Filter';

export function createDefaultFilter(): Filter {
  return {
    id: 'filterId',
    boId: 'filterBoId',
    fieldId: 'filterFieldId',
    type: FilterTypeEnum.BUSINESS_FIELD,
    brackets: createDefaultBrackets(),
  };
}

export function createDefaultBrackets(): Bracket[] {
  return [
    {
      id: 'bracketId1',
      parentIds: [],
      andOr: AndOrEnum.AND,
      dynamicFilters: createDefaultDynamicFilters(),
      brackets: [],
    },
    {
      id: 'bracketId2',
      parentIds: [],
      andOr: AndOrEnum.OR,
      dynamicFilters: createDefaultDynamicFilters(),
      brackets: []
    },
    {
      id: 'bracketId3',
      parentIds: [],
      andOr: AndOrEnum.AND,
      dynamicFilters: [],
      brackets: [
        {
          parentIds: ['bracketId3'],
          id: 'bracketId4',
          andOr: AndOrEnum.AND,
          dynamicFilters: createDefaultDynamicFilters(),
          brackets: []
        },
        {
          parentIds: ['bracketId3'],
          id: 'bracketId5',
          andOr: AndOrEnum.AND,
          dynamicFilters: createDefaultDynamicFilters(),
          brackets: []
        },
        {
          parentIds: ['bracketId3'],
          id: 'bracketId6',
          andOr: AndOrEnum.AND,
          dynamicFilters: createDefaultDynamicFilters(),
          brackets: []
        }
      ]
    },
  ];
}

export function createDefaultDynamicFilters(value = 1): FilterFieldBo[] {
  return [
    {
      id: 'dynamicFilterId1',
      value: 'input text value 1' + value,
      type: FilterFieldTypeEnum.INPUT_TEXT,
      fieldId: 'fieldId1',
      intFrom: null,
      intTo: null,
    },
    {
      id: 'dynamicFilterId2',
      value: 'input text value 2',
      type: FilterFieldTypeEnum.INPUT_TEXT,
      fieldId: 'fieldId2',
      intFrom: null,
      intTo: null,
    },
    {
      id: 'dynamicFilterId3',
      value: 'input text value 3',
      type: FilterFieldTypeEnum.INPUT_TEXT,
      fieldId: 'fieldId3',
      intFrom: null,
      intTo: null,
    }
  ];
}
