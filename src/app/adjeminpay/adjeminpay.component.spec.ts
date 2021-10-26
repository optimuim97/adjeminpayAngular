import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjeminpayComponent } from './adjeminpay.component';

describe('AdjeminpayComponent', () => {
  let component: AdjeminpayComponent;
  let fixture: ComponentFixture<AdjeminpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdjeminpayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjeminpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
