import {Component, OnInit} from '@angular/core';
import {amortizationSchedule} from '../../../node_modules/amortization';
import {Chart} from 'chart.js';
import {LoanDetails} from '../shared/loan-details';
import {LoandetailserviceService} from '../services/loandetailservice.service';

@Component({
  selector: 'app-loan-graph',
  templateUrl: './loan-graph.component.html',
  styleUrls: ['./loan-graph.component.css']
})
export class LoanGraphComponent implements OnInit {

  private myChart: Chart;

  constructor(private loanDetailService: LoandetailserviceService) {
  }

  refreshGraph(loanDetails: LoanDetails) {
    console.log('refreshing graph');
    console.log(loanDetails);
    try {
      const monthlyAmortization = JSON.parse(JSON.stringify(amortizationSchedule(loanDetails.loanCapital, loanDetails.years, loanDetails.interestRate)));

      console.log(monthlyAmortization);
      const interest: number[] = new Array();
      const principal: number[] = new Array();

      const payment: number[] =new Array();

      monthlyAmortization.forEach((obj) => {
        interest.push(obj.interestPaymentRounded);
        principal.push(obj.principalPaymentRounded);
        payment.push(obj.paymentNumber);
      });
      this.myChart.data.labels = payment;
      this.myChart.data.datasets = [{
        label: 'Principal',
        data: principal,
        backgroundColor: 'rgba(55, 160, 225, 0.7)',
        hoverBackgroundColor: 'rgba(55, 160, 225, 0.7)',
        hoverBorderWidth: 2,
      },
        {
          label: 'Interest',
          data: interest,
          backgroundColor: 'rgba(225, 58, 55, 0.7)',
          hoverBackgroundColor: 'rgba(225, 58, 55, 0.7)',
          hoverBorderWidth: 2,
        }
      ];

      this.myChart.update();
    } catch (e) {
      console.error(e);
    }
  }

  initialiseLoanDetails() {
    this.loanDetailService.getMortgageDetails().subscribe(loanDetail => {
      this.refreshGraph(loanDetail);
      // console.log(loanDetail);
    });
  }

  ngOnInit() {

    this.initialiseLoanDetails();

    const ctx = document.getElementById('myChart');
    this.myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true
            }
          }]
        },
        maintainAspectRatio: false,
        responsive: true
      }
    });
  }
}
