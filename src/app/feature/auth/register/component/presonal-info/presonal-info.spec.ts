import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresonalInfo } from './presonal-info';

describe('PresonalInfo', () => {
  let component: PresonalInfo;
  let fixture: ComponentFixture<PresonalInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresonalInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresonalInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
