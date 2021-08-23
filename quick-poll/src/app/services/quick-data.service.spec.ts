import { TestBed } from '@angular/core/testing';

import { QuickDataService } from './quick-data.service';

describe('QuickDataService', () => {
  let service: QuickDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuickDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
