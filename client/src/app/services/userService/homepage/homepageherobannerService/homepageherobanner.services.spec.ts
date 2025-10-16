import { TestBed } from '@angular/core/testing';

import { HomepageherobannerServices } from './homepageherobanner.services';

describe('HomepageherobannerServices', () => {
  let service: HomepageherobannerServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomepageherobannerServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
