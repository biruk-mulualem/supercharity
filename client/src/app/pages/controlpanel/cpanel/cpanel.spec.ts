import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cpanel } from './cpanel';

describe('Cpanel', () => {
  let component: Cpanel;
  let fixture: ComponentFixture<Cpanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cpanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cpanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
