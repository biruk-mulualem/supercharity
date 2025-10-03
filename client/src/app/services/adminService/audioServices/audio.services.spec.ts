import { TestBed } from '@angular/core/testing';

import { AudioServices } from './audio.services';

describe('AudioServices', () => {
  let service: AudioServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
