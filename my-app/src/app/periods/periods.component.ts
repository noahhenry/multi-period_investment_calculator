import { Component, OnInit } from '@angular/core';

import { Period, PeriodMaker } from './shared/period.model'
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
      this.selectedPeriod = this.periods[0];
    }
  }

  getPeriods(): void {
    this.periods = this.periodService.getPeriods();
  }

  createNewPeriod() {
    let newPeriodIdValue = this.periods.length + 1
    let lastPeriod = this.periods.length -1

    // create a new period or copy over values from previous period if it exists
    let newPeriod = !this.periods ? PeriodMaker.create({ 
                                      id: newPeriodIdValue,
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
                                        id: newPeriodIdValue,
                                        initialBalance: 0,
                                        rollovers: [],
                                        totalContributionsForPeriod: 0,
                                        totalInterestEarnedForPeriod: 0,
                                        endOfPeriodBalance: 0
                                      }
                                    }) : PeriodMaker.create({ 
                                      id: newPeriodIdValue,
                                      isNew: true,
                                      periodParameters: { 
                                        initialBalance: this.periods[lastPeriod].periodResult.endOfPeriodBalance,
                                        interestRate: this.periods[lastPeriod].periodParameters.interestRate,
                                        contributionAmount: this.periods[lastPeriod].periodParameters.contributionAmount,
                                        contributionFrequency: this.periods[lastPeriod].periodParameters.contributionFrequency,
                                        periodLength: this.periods[lastPeriod].periodParameters.periodLength,
                                        periodClassification: this.periods[lastPeriod].periodParameters.periodClassification,
                                        compoundFrequency: this.periods[lastPeriod].periodParameters.compoundFrequency
                                      },
                                      periodResult: {
                                        id: newPeriodIdValue,
                                        initialBalance: 0,
                                        rollovers: [],
                                        totalContributionsForPeriod: 0,
                                        totalInterestEarnedForPeriod: 0,
                                        endOfPeriodBalance: 0
                                      }
                                    })

    // HACK: needed trigger re-render of 'periods' arr/object in data-results component
    let tempArr = [].concat(this.periods); // make a copy of the 'periods' array
    tempArr.push(newPeriod); // add 'newPeriod'

    this.periods = tempArr; // assign 'tempArr' array to 'periods' array
    this.selectedPeriod = newPeriod;
  }

}
