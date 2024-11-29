import { TestBed } from '@angular/core/testing';

import { QuotistDataService } from './quotist-data.service';

describe('QuotistDataService', () => {
  let service: QuotistDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuotistDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
