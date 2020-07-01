import { Injectable } from '@angular/core';

import { Period } from './period.model'
import { PERIODS } from '../shared/mock-periods'

@Injectable({
  providedIn: 'root'
})
export class PeriodService {

  getPeriods(): Period[] {
    return PERIODS
  }

  constructor() { }
}
