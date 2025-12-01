import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountUpDirective } from './count-up.directive';

describe('CountUpDirective', () => {
  let component: CountUpDirective;
  let fixture: ComponentFixture<CountUpDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountUpDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(CountUpDirective);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
