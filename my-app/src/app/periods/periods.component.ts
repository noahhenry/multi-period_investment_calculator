import { Component, OnInit, Input } from '@angular/core';

import { Period } from './shared/period-model'
// import { PERIODS } from './shared/mock-periods'
import { PeriodService } from './shared/period.service'

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
  }

  getPeriods(): void {
    this.periods = this.periodService.getPeriods()
  }

  onSelect(period: Period): void {
    this.selectedPeriod = period
  }

}
