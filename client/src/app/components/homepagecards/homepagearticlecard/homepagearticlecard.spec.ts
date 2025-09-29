import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepagearticlecard } from './homepagearticlecard';

describe('Homepagearticlecard', () => {
  let component: Homepagearticlecard;
  let fixture: ComponentFixture<Homepagearticlecard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homepagearticlecard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homepagearticlecard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
