import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddelwareCard2 } from './middelware-card-2';

describe('MiddelwareCard2', () => {
  let component: MiddelwareCard2;
  let fixture: ComponentFixture<MiddelwareCard2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiddelwareCard2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiddelwareCard2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
