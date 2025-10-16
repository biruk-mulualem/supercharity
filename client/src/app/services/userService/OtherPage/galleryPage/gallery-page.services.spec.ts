import { TestBed } from '@angular/core/testing';

import { GalleryPageServices } from './gallery-page.services';

describe('GalleryPageServices', () => {
  let service: GalleryPageServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryPageServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
