import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Videopage } from './videopage';

describe('Videopage', () => {
  let component: Videopage;
  let fixture: ComponentFixture<Videopage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Videopage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Videopage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
