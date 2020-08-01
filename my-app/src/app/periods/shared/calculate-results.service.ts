import { Injectable } from '@angular/core';

import { Period } from './period.model'
import { PeriodResultInterface, RolloverInterface, CompoundInterface } from './period-results.model'
import { PeriodParametersInterface, PeriodParameters } from './period-parameters.model';

@Injectable({
  providedIn: 'root'
})
export class CalculateResultsService {

  // global variables
  overalBalance: number = 0
  totalContributions: number = 0
  totalInterestEarned: number = 0

  calculatePeriodResults(period: Period) {
    let periodParameters: PeriodParametersInterface = period.periodParameters
    let periodResult: PeriodResultInterface = period.periodResult

    // clear rollovers arr as to prevent duplicates/storage of old ones
    periodResult.rollovers = []

    let totalContributionsForPeriod = 0
    let totalInterestEarnedForPeriod = 0
    let periodBalance = periodParameters.initialBalance

    // mappings
    // let initialBalance = periodParameters.initialBalance // 0 or previous period end balance.
    let interestRate = periodParameters.interestRate // annualized %
    let contributionAmount = periodParameters.contributionAmount // $
    // let contributionFrequency = periodParameters.contributionFrequency // Yearly, Quarterly, Monthly
    let periodLength = periodParameters.periodLength // # of Years, Quarters, or Months
    // let periodClassification = periodParameters.periodClassification // Year(s), Quarter(s), Month(s), Day(s)
    let compoundFrequency = periodParameters.compoundFrequency // Years, Quarters, or Months

    let interestRatePerCompound = interestRate / compoundFrequency

    for (let i = 0; i < periodLength; i++) {
      let tempRollover: RolloverInterface = {
        compounds: []
      }

      for (let j = 0; j < compoundFrequency; j++) {
        let tempCompound: CompoundInterface = {
          contribution: 0,
          interestEarned: 0, 
          balance: 0
        }

        let interestEarned = (periodBalance + contributionAmount) * interestRatePerCompound
        totalInterestEarnedForPeriod = totalInterestEarnedForPeriod + interestEarned
        totalContributionsForPeriod = totalContributionsForPeriod + contributionAmount
        periodBalance = periodBalance + contributionAmount + interestEarned

        tempCompound.contribution = contributionAmount
        tempCompound.interestEarned = interestEarned
        tempCompound.balance = periodBalance

        tempRollover.compounds.push(tempCompound)
      }

      periodResult.rollovers.push(tempRollover)

      periodResult.totalContributionsForPeriod = totalContributionsForPeriod
      periodResult.totalInterestEarnedForPeriod = totalInterestEarnedForPeriod
      periodResult.endOfPeriodBalance = periodBalance

      // update global variables with period variables
      this.overalBalance = this.overalBalance + periodBalance
      this.totalContributions = this.totalContributions + totalContributionsForPeriod
      this.totalInterestEarned = this.totalInterestEarned + totalInterestEarnedForPeriod
    }

    console.log("Period With Results:", period)
    return period
  }

  constructor() { }
}
