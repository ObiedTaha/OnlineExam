import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideAuth } from './side-auth';

describe('SideAuth', () => {
  let component: SideAuth;
  let fixture: ComponentFixture<SideAuth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideAuth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideAuth);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
