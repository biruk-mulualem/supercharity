import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallerycard } from './gallerycard';

describe('Gallerycard', () => {
  let component: Gallerycard;
  let fixture: ComponentFixture<Gallerycard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gallerycard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gallerycard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
