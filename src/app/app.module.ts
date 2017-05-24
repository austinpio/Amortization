import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import {MdInputModule, MdSliderModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoanDetails} from './shared/loan-details';
import { LoanGraphComponent } from './loan-graph/loan-graph.component';
import {LoandetailserviceService} from './services/loandetailservice.service';

@NgModule({
  declarations: [
    AppComponent,
    LoanDetailsComponent,
    LoanGraphComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MdInputModule,
    MdSliderModule
  ],
  providers: [
    LoanDetails,
    LoandetailserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
