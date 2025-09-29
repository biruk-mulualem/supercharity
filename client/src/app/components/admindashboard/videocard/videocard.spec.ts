import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Videocard } from './videocard';

describe('Videocard', () => {
  let component: Videocard;
  let fixture: ComponentFixture<Videocard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Videocard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Videocard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
