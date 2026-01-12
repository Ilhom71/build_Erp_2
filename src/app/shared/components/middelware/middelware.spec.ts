import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Middelware } from './middelware';

describe('Middelware', () => {
  let component: Middelware;
  let fixture: ComponentFixture<Middelware>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Middelware]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Middelware);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
