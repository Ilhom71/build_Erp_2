import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddelwareCard } from './middelware-card';

describe('MiddelwareCard', () => {
  let component: MiddelwareCard;
  let fixture: ComponentFixture<MiddelwareCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiddelwareCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiddelwareCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
