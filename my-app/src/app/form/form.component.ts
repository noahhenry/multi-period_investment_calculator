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

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public contributionFrequencySelection: number;
  public periodClassificationSelection: string;
  public compoundFrequencySelection: number;

  period: Period = {
    id: 1,
    initialBalance: 0,
    interestRate: 0.06,
    contributionAmount: 500,
    contributionFrequency: frequencies.monthly,
    periodLength: 2,
    periodClassification: "Year(s)",
    compoundFrequency: frequencies.monthly
  };

  constructor() { }

  ngOnInit(): void {
  }

}
