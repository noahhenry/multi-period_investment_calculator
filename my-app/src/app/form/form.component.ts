import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

import { Period } from '../periods/shared/period.model';
import { INITIALIZEDPERIOD } from '../periods/shared/default-period'
import { FREQUENCIES } from '../periods/shared/compounding-frequencies.model'
import { PERIODCLASSIFICATIONS } from '../periods/shared/period-classifications.model'

let initializedPeriod: Period = INITIALIZEDPERIOD

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnChanges {
  @Input() selectedPeriod: Period;

  public contributionFrequencySelection: number;
  public periodClassificationSelection: number;
  public compoundFrequencySelection: number;

  updateContributionFrequency(value) {
    switch (value) {
      case 1:
        this.selectedPeriod.periodParameters.contributionFrequency = FREQUENCIES.monthly;
        break;
      case 2:
        this.selectedPeriod.periodParameters.contributionFrequency = FREQUENCIES.quarterly;
        break;
      case 3:
        this.selectedPeriod.periodParameters.contributionFrequency = FREQUENCIES.yearly;
        break;
    }
  }

  updatePeriodClassificationSelection(value) {
    switch (value) {
      case 1:
        this.selectedPeriod.periodParameters.periodClassification = PERIODCLASSIFICATIONS.month_s;
        break;
      case 2:
        this.selectedPeriod.periodParameters.periodClassification = PERIODCLASSIFICATIONS.quarter_s;
        break;
      case 3:
        this.selectedPeriod.periodParameters.periodClassification = PERIODCLASSIFICATIONS.year_s;
        break;
    }
  }

  updateCompoundFrequency(value) {
    switch (value) {
      case 1:
        this.selectedPeriod.periodParameters.compoundFrequency = FREQUENCIES.daily;
        break;
      case 2:
        this.selectedPeriod.periodParameters.compoundFrequency = FREQUENCIES.monthly;
        break;
      case 3:
        this.selectedPeriod.periodParameters.compoundFrequency = FREQUENCIES.quarterly;
        break;
      case 4:
        this.selectedPeriod.periodParameters.compoundFrequency = FREQUENCIES.yearly;
        break;
    }
  }

  bindToRadioInputs() {
    if(!this.selectedPeriod) {
      this.selectedPeriod = initializedPeriod
    }

    // Bind Contribution Frequency Radio
    switch (this.selectedPeriod.periodParameters.contributionFrequency) {
      case FREQUENCIES.monthly:
        this.contributionFrequencySelection = 1;
        break;
      case FREQUENCIES.quarterly:
        this.contributionFrequencySelection = 2;
        break;
      case FREQUENCIES.yearly:
        this.contributionFrequencySelection = 3;
        break;
    }

    // Bind Period Classificatoin Radio
    switch (this.selectedPeriod.periodParameters.periodClassification) {
      case PERIODCLASSIFICATIONS.month_s:
        this.periodClassificationSelection = 1;
        break;
      case PERIODCLASSIFICATIONS.quarter_s:
        this.periodClassificationSelection = 2;
        break;
      case PERIODCLASSIFICATIONS.year_s:
        this.periodClassificationSelection = 3;
        break;
    }

    // Bind Compound Frequency Radio
    switch (this.selectedPeriod.periodParameters.compoundFrequency) {
      case FREQUENCIES.daily:
        this.compoundFrequencySelection = 1;
        break;
      case FREQUENCIES.monthly:
        this.compoundFrequencySelection = 2;
        break;
      case FREQUENCIES.quarterly:
        this.compoundFrequencySelection = 3;
        break;
      case FREQUENCIES.yearly:
        this.compoundFrequencySelection = 4;
        break;
    }
  }

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.bindToRadioInputs()
  }

}
