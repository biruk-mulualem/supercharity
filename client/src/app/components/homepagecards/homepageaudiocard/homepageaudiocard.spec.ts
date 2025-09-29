import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepageaudiocard } from './homepageaudiocard';

describe('Homepageaudiocard', () => {
  let component: Homepageaudiocard;
  let fixture: ComponentFixture<Homepageaudiocard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homepageaudiocard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homepageaudiocard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
