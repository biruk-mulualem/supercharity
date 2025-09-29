import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepagevideocard } from './homepagevideocard';

describe('Homepagevideocard', () => {
  let component: Homepagevideocard;
  let fixture: ComponentFixture<Homepagevideocard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homepagevideocard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homepagevideocard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
