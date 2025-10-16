import { TestBed } from '@angular/core/testing';

import { AudioPageServices } from './audio-page.services';

describe('AudioPageServices', () => {
  let service: AudioPageServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioPageServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
