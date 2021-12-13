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
