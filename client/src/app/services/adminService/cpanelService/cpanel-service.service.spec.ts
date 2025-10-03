import { TestBed } from '@angular/core/testing';

import { CpanelServiceService } from './cpanel-service.service';

describe('CpanelServiceService', () => {
  let service: CpanelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpanelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
