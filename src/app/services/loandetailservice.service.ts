import { Injectable } from '@angular/core';
import {LoanDetails} from '../shared/loan-details';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoandetailserviceService {

  private subject: Subject<LoanDetails> = new Subject<LoanDetails>();


  public setMortgageDetails(loanDetailObject: LoanDetails): void {
    console.log('calculate mortgage');
    this.subject.next(loanDetailObject);
  }

  public getMortgageDetails(): Observable<LoanDetails> {
    return this.subject.asObservable();
  }

  constructor() { }

}
