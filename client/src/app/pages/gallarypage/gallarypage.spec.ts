import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallarypage } from './gallarypage';

describe('Gallarypage', () => {
  let component: Gallarypage;
  let fixture: ComponentFixture<Gallarypage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gallarypage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gallarypage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
