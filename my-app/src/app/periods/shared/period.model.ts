import { PeriodParametersInterface } from './period-parameters.model';
import { PeriodResultInterface } from './period-results.model';

export interface PeriodInterface {
  id: number;
  isNew: boolean;
  periodParameters: PeriodParametersInterface;
  periodResult: PeriodResultInterface;
}

export class Period implements PeriodInterface {
  constructor(public id: number, public isNew: boolean, public periodParameters: PeriodParametersInterface, public periodResult: PeriodResultInterface) { }
}

export class PeriodMaker {
  static create(event: Period) {
    return new Period(event.id, event.isNew, event.periodParameters, event.periodResult)
  }
}