import { PeriodParameters } from './period-parameters.model';
import { PeriodResult } from './period-results.model';

export interface Period {
  id: number;
  isNew: boolean;
  periodParameters: PeriodParameters;
  periodResult: PeriodResult;
}

