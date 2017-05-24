import {Component, Inject, OnInit} from '@angular/core';
import {LoanDetails} from '../shared/loan-details';
import {LoandetailserviceService} from '../services/loandetailservice.service';
import {FormBuilder, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl} from '@angular/forms';


@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {


  private loanDetails: LoanDetails;
  private loanService: LoandetailserviceService;

  principal = new FormControl('', [
    Validators.required,
    minValue(10000)
  ]);
  interestRate = new FormControl('');
  years = new FormControl('');

  loanForm: FormGroup;


  constructor(private loanDetailsInject: LoanDetails, private service: LoandetailserviceService, private formBuilder: FormBuilder) {
    this.loanService = service;
    this.loanDetails = loanDetailsInject;
  }

  buildForm(): void {
    this.loanForm = this.formBuilder.group({
      principal: this.principal,
      interestRate: this.interestRate,
      years: this.years
    });


    this.loanForm.valueChanges.subscribe(data => {
      console.log('data changes=' + data.principal);
      console.log('data changes=' + data.years);
      console.log('data changes=' + data.interestRate);

      this.loanDetails.loanCapital = data.principal;
      this.loanDetails.years = data.years;
      this.loanDetails.interestRate = data.interestRate;

      this.formChange(this.loanDetails);
    });
  }

  formChange(loanDetails: LoanDetails): void {
    loanDetails = this.loanDetails;
    this.loanService.calculateMortgage(loanDetails);
  }

  ngOnInit() {
    this.buildForm();
  }

}

export function minValue(min: Number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const input = control.value;
    const isValid = input > min;
    if (isValid) {
      return null;
    }
    else {
      return {'minValue': min};
    }
  };
}
