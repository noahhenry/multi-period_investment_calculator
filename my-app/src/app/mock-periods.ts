import { Period } from './period';

// Compounding Frequencies:
let frequencies = {
  daily: 365,
  monthly: 12,
  quarterly: 4,
  yearly: 1
}

export const PERIODS: Period[] = [
  {
    id: 1,
    initialBalance: 0,
    interestRate: 0.06,
    contributionAmount: 500,
    contributionFrequency: frequencies.monthly,
    periodLength: 2,
    periodClassification: "Year(s)",
    compoundFrequency: frequencies.monthly
  },
  {
    id: 2,
    initialBalance: 0,
    interestRate: 0.08,
    contributionAmount: 1500,
    contributionFrequency: frequencies.monthly,
    periodLength: 4,
    periodClassification: "Year(s)",
    compoundFrequency: frequencies.quarterly
  }
];
