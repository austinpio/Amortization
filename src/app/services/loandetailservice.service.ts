import { Injectable } from '@angular/core';
import {LoanDetails} from '../shared/loan-details';

@Injectable()
export class LoandetailserviceService {

  private loanDetails: LoanDetails;

  public calculateMortgage(loanDetailObject: LoanDetails): void {
    console.log('calculate mortgage');
    this.loanDetails = loanDetailObject;
  }
  
  constructor() { }

}
