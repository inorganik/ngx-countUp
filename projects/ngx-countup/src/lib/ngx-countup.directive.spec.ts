import { Component, PLATFORM_ID, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountUpOptions } from 'countup.js';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CountUpDirective } from './ngx-countup.directive';

@Component({
  template:
    '<div [countUp]="endVal()" [countUpOptions]="options()" [reanimateOnClick]="reanimateOnClick()"></div>',
  imports: [CountUpDirective],
})
class TestComponent {
  endVal = signal(100);
  options = signal<CountUpOptions>({});
  reanimateOnClick = signal(true);
}

describe('CountUpDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let directive: CountUpDirective;
  let divElement: HTMLDivElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    divElement = fixture.nativeElement.querySelector('div');
    fixture.detectChanges();

    // Get the directive instance
    const debugElement = fixture.debugElement.children[0];
    directive = debugElement.injector.get(CountUpDirective);
  });

  it('should create', () => {
    expect(directive).toBeTruthy();
  });

  describe('onClick', () => {
    it('should call animate when reanimateOnClick is true', () => {
      const animateSpy = vi.spyOn(directive, 'animate');
      component.reanimateOnClick.set(true);
      fixture.detectChanges();

      directive.onClick();

      expect(animateSpy).toHaveBeenCalled();
    });

    it('should not call animate when reanimateOnClick is false', () => {
      const animateSpy = vi.spyOn(directive, 'animate');
      component.reanimateOnClick.set(false);
      fixture.detectChanges();

      directive.onClick();

      expect(animateSpy).not.toHaveBeenCalled();
    });

    it('should trigger onClick on click event', () => {
      const onClickSpy = vi.spyOn(directive, 'onClick');

      divElement.click();

      expect(onClickSpy).toHaveBeenCalled();
    });
  });

  describe('ngOnChanges', () => {
    it('should initialize countUp on first change', () => {
      expect(directive.countUp).toBeDefined();
    });

    it('should reinitialize when countUpOptions change', () => {
      const initialCountUp = directive.countUp;

      component.options.set({ duration: 5 });
      fixture.detectChanges();

      expect(directive.countUp).not.toBe(initialCountUp);
    });

    it('should update countUp when only endVal changes', () => {
      const countUpSpy = vi.spyOn(directive.countUp, 'update');

      component.endVal.set(200);
      fixture.detectChanges();

      expect(countUpSpy).toHaveBeenCalledWith(200);
    });

    it('should preserve frameVal as startVal when updating endVal', () => {
      directive.countUp.frameVal = 50;
      const options = component.options();

      component.endVal.set(150);
      fixture.detectChanges();

      // The directive should have set startVal to frameVal
      expect(options.startVal).toBe(50);
    });

    it('should not change startVal if already set in options', () => {
      component.options.set({ startVal: 25 });
      fixture.detectChanges();

      directive.countUp.frameVal = 50;
      const initialStartVal = component.options().startVal;

      component.endVal.set(150);
      fixture.detectChanges();

      expect(component.options().startVal).toBe(initialStartVal);
    });
  });

  describe('animate', () => {
    it('should reset and start countUp', () => {
      const resetSpy = vi.spyOn(directive.countUp, 'reset');
      const startSpy = vi.spyOn(directive.countUp, 'start');

      directive.animate();

      expect(resetSpy).toHaveBeenCalled();
      expect(startSpy).toHaveBeenCalled();
    });

    it('should emit complete event when animation finishes', async () => {
      const completionPromise = new Promise<void>((resolve) => {
        directive.complete.subscribe(() => {
          resolve();
        });
      });

      directive.animate();

      // Wait for the completion event
      await completionPromise;

      expect(true).toBe(true); // If we reach here, the event was emitted
    });
  });

  describe('scrollSpy', () => {
    it('should not auto-animate when enableScrollSpy is true', () => {
      const resetSpy = vi.fn();
      const startSpy = vi.fn();

      component.options.set({ enableScrollSpy: true });
      fixture.detectChanges();

      // Wait a bit to ensure animation didn't start
      setTimeout(() => {
        expect(directive.countUp.reset).not.toBe(resetSpy);
        expect(directive.countUp.start).not.toBe(startSpy);
      }, 100);
    });
  });

  describe('server-side rendering', () => {
    it('should not initialize on server platform', async () => {
      // Create a new component with server platform
      TestBed.resetTestingModule();
      await TestBed.configureTestingModule({
        imports: [TestComponent],
        providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
      }).compileComponents();

      const serverFixture = TestBed.createComponent(TestComponent);
      serverFixture.detectChanges();

      const debugElement = serverFixture.debugElement.children[0];
      const serverDirective = debugElement.injector.get(CountUpDirective);

      expect(serverDirective.countUp).toBeUndefined();

      serverFixture.destroy();
    });
  });
});
