import {
  Directive,
  ElementRef,
  Input,
  Output,
  HostListener,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  NgZone, Inject, PLATFORM_ID
} from '@angular/core';
import { CountUp, CountUpOptions } from 'countup.js';
import {isPlatformBrowser} from '@angular/common';

@Directive({
  selector: '[countUp]'
})
export class CountUpDirective implements OnChanges {

  countUp: CountUp;
  // the value you want to count to
  @Input('countUp') endVal: number;

  @Input() options: CountUpOptions = {};
  @Input() reanimateOnClick = true;
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() complete = new EventEmitter<void>();

  // Re-animate if preference is set.
  @HostListener('click')
  onClick() {
    if (this.reanimateOnClick) {
      this.animate();
    }
  }

  // previous end val enables us to count from last endVal when endVal is changed
  previousEndVal: number;

  constructor(
    private el: ElementRef,
    private zone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    // don't animate server-side (universal)
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const { options, endVal } = changes;
    if (endVal?.currentValue !== undefined) {
      if (this.previousEndVal !== undefined) {
        this.options = {
          ...this.options,
          startVal: this.previousEndVal
        };
      }
      this.initAndRun();
      this.previousEndVal = this.endVal;
    }
    else if (options?.currentValue !== undefined) {
      this.initAndRun();
    }
  }

  initAndRun(): void {
    this.countUp = new CountUp(this.el.nativeElement, this.endVal, this.options);
    if (!this.options.enableScrollSpy) {
      this.animate();
    }
  }

  animate() {
    this.zone.runOutsideAngular(() => {
      this.countUp.reset();
      this.countUp.start(() => {
        this.zone.run(() => {
          this.complete.emit();
        });
      });
    });
  }
}
