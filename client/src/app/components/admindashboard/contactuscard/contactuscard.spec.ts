import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contactuscard } from './contactuscard';

describe('Contactuscard', () => {
  let component: Contactuscard;
  let fixture: ComponentFixture<Contactuscard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contactuscard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contactuscard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
