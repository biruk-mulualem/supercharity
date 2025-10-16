import { TestBed } from '@angular/core/testing';

import { VideoPageServices } from './video-page.services';

describe('VideoPageServices', () => {
  let service: VideoPageServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoPageServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
