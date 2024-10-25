import { TestBed } from '@angular/core/testing';

import { MovieListingService } from './movie-listing.service';

describe('MovieListingService', () => {
  let service: MovieListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
