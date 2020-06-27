export interface Compound {
  contribution: number;
  interestEarned: number;
  balance: number;
}

export interface Rollover {
  compounds: Compound[];
}

export interface PeriodResult {
  id: number;
  initialBalance: number; // todo: might be able to delete?
  rollovers: Rollover[];
  totalContributionsForPeriod: number;
  totalInterestEarnedForPeriod: number;
  endOfPeriodBalance: number;
}