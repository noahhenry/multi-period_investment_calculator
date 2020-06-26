export interface PeriodParameters {
  id: number;
  initialBalance: number;
  interestRate: number;
  contributionAmount: number;
  contributionFrequency: number;
  periodLength: number;
  periodClassification: string;
  compoundFrequency: number;
}