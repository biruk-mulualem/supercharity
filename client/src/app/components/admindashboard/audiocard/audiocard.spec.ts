import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Audiocard } from './audiocard';

describe('Audiocard', () => {
  let component: Audiocard;
  let fixture: ComponentFixture<Audiocard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Audiocard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Audiocard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
