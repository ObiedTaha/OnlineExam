import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Passwords } from './passwords';

describe('Passwords', () => {
  let component: Passwords;
  let fixture: ComponentFixture<Passwords>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Passwords]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Passwords);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
