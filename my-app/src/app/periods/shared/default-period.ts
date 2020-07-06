import { Period } from './period.model';
import { FREQUENCIES } from './compounding-frequencies.model'
import { PERIODCLASSIFICATIONS } from './period-classifications.model'


export const INITIALIZEDPERIOD: Period = {
  id: 0,
  isNew: true,
  periodParameters: {
    initialBalance: 0,
    interestRate: 0.00,
    contributionAmount: 0,
    contributionFrequency: FREQUENCIES.monthly,
    periodLength: 0,
    periodClassification: PERIODCLASSIFICATIONS.year_s,
    compoundFrequency: FREQUENCIES.monthly
  },
  periodResult: {
    id: 0,
    initialBalance: 0,
    rollovers: [],
    totalContributionsForPeriod: 0,
    totalInterestEarnedForPeriod: 0,
    endOfPeriodBalance: 0
  }
}