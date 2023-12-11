import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroSummaryComponent } from './agro-summary.component';

describe('AgroSummaryComponent', () => {
  let component: AgroSummaryComponent;
  let fixture: ComponentFixture<AgroSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgroSummaryComponent]
    });
    fixture = TestBed.createComponent(AgroSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
