import { TestBed } from '@angular/core/testing';

import { ApprankingDataService } from './appranking-data.service';

describe('ApprankingDataService', () => {
  let service: ApprankingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprankingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
