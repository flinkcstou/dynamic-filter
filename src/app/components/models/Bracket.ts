import { FilterFieldBo } from 'src/app/components/models/FilterFieldBo';
import { AndOrEnum } from 'src/app/components/models/AndOrEnum';

export class Bracket {
  id: string;
  andOr: AndOrEnum;
  dynamicFilters: FilterFieldBo[];
  brackets: Bracket[];
}
