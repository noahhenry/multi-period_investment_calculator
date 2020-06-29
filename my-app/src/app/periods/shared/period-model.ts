import { PeriodParameters } from './period-parameters.model';
import { PeriodResult } from './period-results.model';

export interface Period {
  id: number;
  periodParameters: PeriodParameters;
  periodResult: PeriodResult;
}