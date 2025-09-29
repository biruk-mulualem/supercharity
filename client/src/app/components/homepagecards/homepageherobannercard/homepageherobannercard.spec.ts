import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepageherobannercard } from './homepageherobannercard';

describe('Homepageherobannercard', () => {
  let component: Homepageherobannercard;
  let fixture: ComponentFixture<Homepageherobannercard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homepageherobannercard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homepageherobannercard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
