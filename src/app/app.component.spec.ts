import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CountUpModule } from 'ngx-countup';
import { FormsModule } from '@angular/forms';
import { DebugChangeDetectionComponent } from './debug-change-detection.component';

describe('AppComponent', () => {
  let component, fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        CountUpModule,
      ],
      declarations: [
        AppComponent,
        DebugChangeDetectionComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
