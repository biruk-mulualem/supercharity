import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Articlepage } from './articlepage';

describe('Articlepage', () => {
  let component: Articlepage;
  let fixture: ComponentFixture<Articlepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Articlepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Articlepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
