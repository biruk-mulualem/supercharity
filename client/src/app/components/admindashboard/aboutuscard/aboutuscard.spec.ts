import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutuscard } from './aboutuscard';

describe('Aboutuscard', () => {
  let component: Aboutuscard;
  let fixture: ComponentFixture<Aboutuscard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutuscard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aboutuscard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
