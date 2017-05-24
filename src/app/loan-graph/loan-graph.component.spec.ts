import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanGraphComponent } from './loan-graph.component';

describe('LoanGraphComponent', () => {
  let component: LoanGraphComponent;
  let fixture: ComponentFixture<LoanGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
