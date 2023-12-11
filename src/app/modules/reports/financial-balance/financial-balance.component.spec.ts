import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialBalanceComponent } from './financial-balance.component';

describe('FinancialBalanceComponent', () => {
  let component: FinancialBalanceComponent;
  let fixture: ComponentFixture<FinancialBalanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancialBalanceComponent]
    });
    fixture = TestBed.createComponent(FinancialBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
