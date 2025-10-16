import { TestBed } from '@angular/core/testing';

import { HomepagearticleServices } from './homepagearticle.services';

describe('HomepagearticleServices', () => {
  let service: HomepagearticleServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomepagearticleServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
