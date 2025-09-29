import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Audiopage } from './audiopage';

describe('Audiopage', () => {
  let component: Audiopage;
  let fixture: ComponentFixture<Audiopage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Audiopage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Audiopage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
