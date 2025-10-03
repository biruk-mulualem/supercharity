import { TestBed } from '@angular/core/testing';

import { HomepagegalleryServices } from './homepagegallery.services';

describe('HomepagegalleryServices', () => {
  let service: HomepagegalleryServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomepagegalleryServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
