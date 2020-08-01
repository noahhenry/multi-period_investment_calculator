export interface PeriodParametersInterface {
  initialBalance: number;
  interestRate: number;
  contributionAmount: number;
  contributionFrequency: number;
  periodLength: number;
  periodClassification: string;
  compoundFrequency: number;
}

export class PeriodParameters implements PeriodParametersInterface {
  constructor(public initialBalance: number, public interestRate: number, public contributionAmount: number, public contributionFrequency: number, public periodLength: number, public periodClassification: string, public compoundFrequency: number) { }
}