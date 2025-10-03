import { TestBed } from '@angular/core/testing';

import { VideoServices } from './video.services';

describe('VideoServices', () => {
  let service: VideoServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
