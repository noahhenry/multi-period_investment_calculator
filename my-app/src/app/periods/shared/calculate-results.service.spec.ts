import { TestBed } from '@angular/core/testing';

import { CalculateResultsService } from './calculate-results.service';

describe('CalculateResultsService', () => {
  let service: CalculateResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
