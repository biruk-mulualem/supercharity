import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Articlecard } from './articlecard';

describe('Articlecard', () => {
  let component: Articlecard;
  let fixture: ComponentFixture<Articlecard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Articlecard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Articlecard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
