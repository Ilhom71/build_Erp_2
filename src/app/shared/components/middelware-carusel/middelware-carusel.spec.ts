import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddelwareCarusel } from './middelware-carusel';

describe('MiddelwareCarusel', () => {
  let component: MiddelwareCarusel;
  let fixture: ComponentFixture<MiddelwareCarusel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiddelwareCarusel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiddelwareCarusel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
