import {
  Directive,
  ElementRef,
  Input,
  Output,
  HostListener,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import * as CountUp from 'countup.js';

@Directive({
  selector: '[countUp]'
})
export class CountUpDirective implements OnChanges {

  countUp: any;
  // Optional extra configuration, such as easing.
  @Input('countUp') options: any;

  // Optional start value for the count. Defaults to zero.
  @Input() startVal: number;

  // the number to count to
  @Input() endVal: number;

  // Optional duration of the animation in seconds. Default is 2.
  @Input() duration: number;

  // Optional number of decimal places. Default is 2.
  @Input() decimals: number;
  
  // Optional flag for specifying whether the element should re-animate when clicked.
  // Default is true.
  @Input() reanimateOnClick: boolean;

  // Re-animate if preference is set.
  @HostListener('click')
  onClick() {
    if (this.reanimateOnClick) {
      this.animate();
    }
  }

  // on-complete event emitter
  @Output() complete = new EventEmitter<void>();

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.endVal && changes.endVal.currentValue) {
      console.log('create countUp with endVal', this.endVal);
      this.countUp = this.createCountUp();
      this.animate();
    }
  }

  private createCountUp(): any {
    const start = this.startVal || 0;
    const duration = this.duration || 2;
    const decimals = this.decimals || 0;

    if (!this.duration) {
      this.duration = duration;
    }

    // construct countUp
    let countUp = new CountUp(this.el.nativeElement, start, this.endVal, decimals, duration, this.options);
    const diff = Math.abs(this.endVal - start);
    // make easing smoother for large numbers
    if (diff > 999) {
      const up = (this.endVal > start) ? -1 : 1;
      countUp = new CountUp(this.el.nativeElement, start, this.endVal + (up * 100), decimals, duration / 2, this.options);
    }

    return countUp;
  }

  private animate() {
    this.countUp.reset();
    if (this.endVal > 999) {
      this.countUp.start(() => this.countUp.update(this.endVal));
      setTimeout(() => {
        this.complete.emit();
      }, this.duration * 1000);
    } else {
      this.countUp.start(() => {
        this.complete.emit();
      });
    }
  }
}
