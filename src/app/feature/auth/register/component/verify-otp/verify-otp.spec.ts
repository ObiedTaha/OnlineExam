import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyOTP } from './verify-otp';

describe('VerifyOTP', () => {
  let component: VerifyOTP;
  let fixture: ComponentFixture<VerifyOTP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyOTP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyOTP);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
