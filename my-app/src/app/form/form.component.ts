import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

import { Period } from '../periods/shared/period-model';


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

let initializedPeriod: Period = {
  id: 0,
    periodParameters: {
      initialBalance: 0,
      interestRate: 0.00,
      contributionAmount: 0,
      contributionFrequency: frequencies.monthly,
      periodLength: 0,
      periodClassification: "year(s)",
      compoundFrequency: frequencies.monthly
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

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() selectedPeriod: Period;

  public contributionFrequencySelection: number;
  public periodClassificationSelection: number;
  public compoundFrequencySelection: number;

  updateContributionFrequency(value) {
    switch (value) {
      case 1:
        this.selectedPeriod.periodParameters.contributionFrequency = frequencies.monthly;
        break;
      case 2:
        this.selectedPeriod.periodParameters.contributionFrequency = frequencies.quarterly;
        break;
      case 3:
        this.selectedPeriod.periodParameters.contributionFrequency = frequencies.yearly;
        break;
    }
  }

  updatePeriodClassificationSelection(value) {
    switch (value) {
      case 1:
        this.selectedPeriod.periodParameters.periodClassification = periodClassifications.month;
        break;
      case 2:
        this.selectedPeriod.periodParameters.periodClassification = periodClassifications.quarter;
        break;
      case 3:
        this.selectedPeriod.periodParameters.periodClassification = periodClassifications.year;
        break;
    }
  }

  updateCompoundFrequency(value) {
    switch (value) {
      case 1:
        this.selectedPeriod.periodParameters.compoundFrequency = frequencies.daily;
        break;
      case 2:
        this.selectedPeriod.periodParameters.compoundFrequency = frequencies.monthly;
        break;
      case 3:
        this.selectedPeriod.periodParameters.compoundFrequency = frequencies.quarterly;
        break;
      case 4:
        this.selectedPeriod.periodParameters.compoundFrequency = frequencies.yearly;
        break;
    }
  }

  bindToRadioInputs() {
    if(!this.selectedPeriod) {
      this.selectedPeriod = initializedPeriod
    }

    // Bind Contribution Frequency Radio
    switch (this.selectedPeriod.periodParameters.contributionFrequency) {
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
    switch (this.selectedPeriod.periodParameters.periodClassification) {
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
    switch (this.selectedPeriod.periodParameters.compoundFrequency) {
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

  constructor() {
  }

  ngOnInit(): void {
    this.bindToRadioInputs()
  }

  ngOnChanges(changes: SimpleChanges) {
    this.bindToRadioInputs()
  }

}
