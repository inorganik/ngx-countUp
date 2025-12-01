import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  NgZone,
  OnChanges,
  Output,
  PLATFORM_ID,
  SimpleChanges,
} from '@angular/core';
import { CountUp, CountUpOptions } from 'countup.js';

@Directive({
  selector: '[countUp]',
  standalone: true,
})
export class CountUpDirective implements OnChanges {
  countUp!: CountUp;

  // the value you want to count to
  @Input('countUp') endVal!: number;

  @Input() options: CountUpOptions = {};

  @Input() reanimateOnClick = true;

  @Output() complete = new EventEmitter<void>();

  // Re-animate if preference is set.
  @HostListener('click')
  onClick() {
    if (this.reanimateOnClick) {
      this.animate();
    }
  }

  constructor(
    private el: ElementRef,
    private zone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

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
          if (!this.options.startVal) {
            this.options.startVal = this.countUp.frameVal;
          }
          this.zone.runOutsideAngular(() => {
            this.countUp.update(this.endVal);
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
      this.countUp = new CountUp(this.el.nativeElement, this.endVal, this.options);
      if (!this.options.enableScrollSpy) {
        this.animate();
      }
    });
  }
}
