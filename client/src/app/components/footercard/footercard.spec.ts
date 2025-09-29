import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footercard } from './footercard';

describe('Footercard', () => {
  let component: Footercard;
  let fixture: ComponentFixture<Footercard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footercard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footercard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
