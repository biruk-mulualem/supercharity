import { TestBed } from '@angular/core/testing';

import { HomepagevideoServices } from './homepagevideo.services';

describe('HomepagevideoServices', () => {
  let service: HomepagevideoServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomepagevideoServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
