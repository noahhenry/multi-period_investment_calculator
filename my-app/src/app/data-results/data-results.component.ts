import { Component, OnInit, Input } from '@angular/core';

import { Period } from '../periods/shared/period-model';

@Component({
  selector: 'app-data-results',
  templateUrl: './data-results.component.html',
  styleUrls: ['./data-results.component.scss']
})
export class DataResultsComponent implements OnInit {
  @Input() periods: Period[];

  selectedPeriod: Period;

  displayedColumns: string[] = ["period", "contributions", "interest-earned", "balance"];

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(period: Period): void {
    this.selectedPeriod = period
  }

}
