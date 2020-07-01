import { Component, OnInit, Input } from '@angular/core';

import { Period } from './shared/period.model'
import { PeriodService } from './shared/period.service'

import { FREQUENCIES } from './shared/compounding-frequencies.model'
import { PERIODCLASSIFICATIONS } from './shared/period-classifications.model'

@Component({
  selector: 'app-periods',
  templateUrl: './periods.component.html',
  styleUrls: ['./periods.component.scss']
})
export class PeriodsComponent implements OnInit {

  periods: Period[];
  selectedPeriod: Period;

  constructor(private periodService: PeriodService) { }

  ngOnInit(): void {
    this.getPeriods();

    if(this.periods.length) {
      this.selectedPeriod = this.periods[0]
    }
  }

  getPeriods(): void {
    this.periods = this.periodService.getPeriods()
  }

  createNewPeriod() {
    console.log("Creating a new Period...")

    let newPeriod: Period = {
      id: this.periods.length + 1,
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
          id: this.periods.length + 1,
          initialBalance: 0,
          rollovers: [],
          totalContributionsForPeriod: 0,
          totalInterestEarnedForPeriod: 0,
          endOfPeriodBalance: 0
        }
    }
  }

}
