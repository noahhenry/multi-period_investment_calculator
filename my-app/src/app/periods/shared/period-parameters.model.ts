export interface PeriodParameters {
  initialBalance: number;
  interestRate: number;
  contributionAmount: number;
  contributionFrequency: number;
  periodLength: number;
  periodClassification: string;
  compoundFrequency: number;
}