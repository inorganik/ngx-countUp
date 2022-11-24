import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CountUpModule } from '../../projects/count-up/src/lib/count-up.module';
import { FormsModule } from '@angular/forms';
import { DebugChangeDetectionComponent } from './debug-change-detection.component';

describe('AppComponent', () => {
  let component, fixture;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [
        FormsModule,
        CountUpModule,
    ],
    declarations: [
        AppComponent,
        DebugChangeDetectionComponent
    ],
    teardown: { destroyAfterEach: false }
}).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
