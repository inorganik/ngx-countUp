import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  NgZone,
  OnChanges,
  PLATFORM_ID,
  SimpleChanges,
  inject,
  input,
  output,
} from '@angular/core';
import { CountUp, CountUpOptions } from 'countup.js';

@Directive({
  selector: '[countUp]',
  host: {
    '(click)': 'onClick()',
  },
  standalone: true,
})
export class CountUpDirective implements OnChanges {
  private el = inject(ElementRef);
  private zone = inject(NgZone);
  private platformId = inject(PLATFORM_ID);

  countUp!: CountUp;

  // the value you want to count to
  endVal = input.required<number>({ alias: 'countUp' });

  options = input<CountUpOptions>({});

  reanimateOnClick = input(true);

  complete = output<void>();

  // Re-animate if preference is set.
  onClick() {
    if (this.reanimateOnClick()) {
      this.animate();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // don't animate server-side
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const { options, endVal } = changes;

    if (this.countUp) {
      if (options?.currentValue !== undefined || endVal?.currentValue !== undefined) {
        // If options have changed, reinitialize
        if (options?.currentValue !== undefined) {
          this.initAndRun();
        } else {
          // Only endVal has changed, update with current options
          const currentOptions = this.options();
          if (!currentOptions.startVal) {
            currentOptions.startVal = this.countUp.frameVal;
          }
          this.zone.runOutsideAngular(() => {
            this.countUp.update(this.endVal());
          });
        }
      }
    } else {
      this.initAndRun();
    }
  }

  animate(): void {
    this.zone.runOutsideAngular(() => {
      this.countUp.reset();
      this.countUp.start(() => {
        this.zone.run(() => {
          this.complete.emit();
        });
      });
    });
  }

  private initAndRun(): void {
    this.zone.runOutsideAngular(() => {
      this.countUp = new CountUp(this.el.nativeElement, this.endVal(), this.options());
      if (!this.options().enableScrollSpy) {
        this.animate();
      }
    });
  }
}
