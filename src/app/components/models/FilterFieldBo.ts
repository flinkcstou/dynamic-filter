import { FilterFieldTypeEnum } from 'src/app/components/models/FilterFieldTypeEnum';

export class FilterFieldBo {
  id: string;
  fieldId: string;
  type: FilterFieldTypeEnum;
  value: string;
  intFrom: number;
  intTo: number;
}
