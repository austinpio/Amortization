import { TestBed, inject } from '@angular/core/testing';

import { LoandetailserviceService } from './loandetailservice.service';

describe('LoandetailserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoandetailserviceService]
    });
  });

  it('should be created', inject([LoandetailserviceService], (service: LoandetailserviceService) => {
    expect(service).toBeTruthy();
  }));
});
