import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepageaboutuscard } from './homepageaboutuscard';

describe('Homepageaboutuscard', () => {
  let component: Homepageaboutuscard;
  let fixture: ComponentFixture<Homepageaboutuscard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homepageaboutuscard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homepageaboutuscard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
