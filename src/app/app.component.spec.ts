import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CountUpModule } from 'countup.js-angular2';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component, fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        CountUpModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
