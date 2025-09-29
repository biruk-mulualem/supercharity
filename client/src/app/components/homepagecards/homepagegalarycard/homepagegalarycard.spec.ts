import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepagegalarycard } from './homepagegalarycard';

describe('Homepagegalarycard', () => {
  let component: Homepagegalarycard;
  let fixture: ComponentFixture<Homepagegalarycard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homepagegalarycard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homepagegalarycard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
