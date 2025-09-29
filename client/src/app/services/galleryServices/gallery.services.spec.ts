import { TestBed } from '@angular/core/testing';

import { GalleryServices } from './gallery.services';

describe('GalleryServices', () => {
  let service: GalleryServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
