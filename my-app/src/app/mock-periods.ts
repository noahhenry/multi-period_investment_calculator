import { PeriodParameters } from './period-parameters';

// Compounding Frequencies:
let frequencies = {
  daily: 365,
  monthly: 12,
  quarterly: 4,
  yearly: 1
}

export const PERIODS: PeriodParameters[] = [
  {
    id: 1,
    initialBalance: 0,
    interestRate: 0.08,
    contributionAmount: 2500,
    contributionFrequency: frequencies.monthly,
    periodLength: 2,
    periodClassification: "year(s)",
    compoundFrequency: frequencies.monthly
  },
  {
    id: 2,
    initialBalance: 0,
    interestRate: 0.08,
    contributionAmount: 4000,
    contributionFrequency: frequencies.monthly,
    periodLength: 1,
    periodClassification: "year(s)",
    compoundFrequency: frequencies.quarterly
  }
];
