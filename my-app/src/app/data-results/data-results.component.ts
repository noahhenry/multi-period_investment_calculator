import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

import { Period } from '../periods/shared/period.model';

@Component({
  selector: 'app-data-results',
  templateUrl: './data-results.component.html',
  styleUrls: ['./data-results.component.scss']
})
export class DataResultsComponent implements OnInit {
  @Input() periods: Period[];
  @Input() selectedPeriod: Period;
  @Output() selectedPeriodChange = new EventEmitter<Period>();

  displayedColumns: string[] = ["period", "contributions", "interest-earned", "balance"];

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(period: Period): void {
    console.log("onSelect()", period);
    this.selectedPeriod = period;
    this.selectedPeriodChange.emit(period)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

}
