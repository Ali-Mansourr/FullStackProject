import { TestBed } from '@angular/core/testing';

import { GenreDataService } from './genre-data.service';

describe('GenreDataService', () => {
  let service: GenreDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenreDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
