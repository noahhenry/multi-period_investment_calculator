import { Component, OnInit } from '@angular/core';

import { Period } from '../period'
import { PERIODS } from '../mock-periods'

// Compounding Frequencies:
let frequencies = {
  daily: 365,
  monthly: 12,
  quarterly: 4,
  yearly: 1
}

// Period Classifications:
let periodClassifications = {
  month: "month(s)",
  quarter: "quarter(s)",
  year: "year(s)"
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public contributionFrequencySelection: number;
  public periodClassificationSelection: number;
  public compoundFrequencySelection: number;

  flag: any;

  period: Period = {
    id: 1,
    initialBalance: 0,
    interestRate: 0.06,
    contributionAmount: 500,
    contributionFrequency: frequencies.monthly,
    periodLength: 2,
    periodClassification: "year(s)",
    compoundFrequency: frequencies.monthly
  };

  updateContributionFrequency(value) {
    switch (value) {
      case 1:
        this.period.contributionFrequency = frequencies.monthly;
        break;
      case 2:
        this.period.contributionFrequency = frequencies.quarterly;
        break;
      case 3:
        this.period.contributionFrequency = frequencies.yearly;
        break;
    }
  }

  updatePeriodClassificationSelection(value) {
    switch (value) {
      case 1:
        this.period.periodClassification = periodClassifications.month;
        break;
      case 2:
        this.period.periodClassification = periodClassifications.quarter;
        break;
      case 3:
        this.period.periodClassification = periodClassifications.year;
        break;
    }
  }

  updateCompoundFrequency(value) {
    switch (value) {
      case 1:
        this.period.compoundFrequency = frequencies.daily;
        break;
      case 2:
        this.period.compoundFrequency = frequencies.monthly;
        break;
      case 3:
        this.period.compoundFrequency = frequencies.quarterly;
        break;
      case 4:
        this.period.compoundFrequency = frequencies.yearly;
        break;
    }
  }

  constructor() {
  }

  ngOnInit(): void {
    // Bind Contribution Frequency Radio
    switch (this.period.contributionFrequency) {
      case frequencies.monthly:
        this.contributionFrequencySelection = 1;
        break;
      case frequencies.quarterly:
        this.contributionFrequencySelection = 2;
        break;
      case frequencies.yearly:
        this.contributionFrequencySelection = 3;
        break;
    }

    // Bind Period Classificatoin Radio
    switch (this.period.periodClassification) {
      case periodClassifications.month:
        this.periodClassificationSelection = 1;
        break;
      case periodClassifications.quarter:
        this.periodClassificationSelection = 2;
        break;
      case periodClassifications.year:
        this.periodClassificationSelection = 3;
        break;
    }

    // Bind Compound Frequency Radio
    switch (this.period.compoundFrequency) {
      case frequencies.daily:
        this.compoundFrequencySelection = 1;
        break;
      case frequencies.monthly:
        this.compoundFrequencySelection = 2;
        break;
      case frequencies.quarterly:
        this.compoundFrequencySelection = 3;
        break;
      case frequencies.yearly:
        this.compoundFrequencySelection = 4;
        break;
    }
  }

}
