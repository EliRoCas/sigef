import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgfservicesComponent } from './sgfservices.component';

describe('SgfservicesComponent', () => {
  let component: SgfservicesComponent;
  let fixture: ComponentFixture<SgfservicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SgfservicesComponent]
    });
    fixture = TestBed.createComponent(SgfservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
