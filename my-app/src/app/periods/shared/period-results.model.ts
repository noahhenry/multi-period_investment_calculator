export interface CompoundInterface {
  contribution: number;
  interestEarned: number;
  balance: number;
}

export interface RolloverInterface {
  compounds: CompoundInterface[];
}

export interface PeriodResultInterface {
  id: number;
  initialBalance: number;
  rollovers: RolloverInterface[];
  totalContributionsForPeriod: number;
  totalInterestEarnedForPeriod: number;
  endOfPeriodBalance: number;
}