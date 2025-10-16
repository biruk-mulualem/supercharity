import { TestBed } from '@angular/core/testing';

import { HomepageaudioServices } from './homepageaudio.services';

describe('HomepageaudioServices', () => {
  let service: HomepageaudioServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomepageaudioServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
