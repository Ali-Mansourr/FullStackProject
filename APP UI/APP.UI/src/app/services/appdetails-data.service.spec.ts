import { TestBed } from '@angular/core/testing';

import { AppdetailsDataService } from './appdetails-data.service';

describe('AppdetailsDataService', () => {
  let service: AppdetailsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppdetailsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
