import { Directive, ElementRef, Input, HostListener, AfterViewInit } from '@angular/core';
import * as CountUp from 'countup.js';

@Directive({
  selector: '[countUp]'
})
export class CountUpDirective implements AfterViewInit {

  countUp: any;
  /**
   * Optional extra configuration, such as easing.
   */
  @Input('countUp')
  options: any;

  /**
   * Optional start value for the count. Defaults to zero.
   */
  @Input()
  startVal: number;

  /**
   * The value to count up to.
   */
  private _endVal: number;

  get endVal(): number {
    return this._endVal;
  }
  @Input()
  set endVal(value: number) {

    this._endVal = value;

    if (isNaN(value)) {
      return;
    }

    if (!this.countUp) {
      return;
    }

    this.countUp.update(value);
  }

  /**
   * Optional duration of the animation. Default is two seconds.
   */
  @Input()
  duration: number;

  /**
   * Optional number of decimal places. Default is two.
   */
  @Input()
  decimals: number;

  /**
   * Optional flag for specifying whether the element should re-animate when clicked.
   * Default is true.
   */
  @Input()
  reanimateOnClick: boolean;

  ngAfterViewInit() {
    this.countUp = this.createCountUp(this.startVal, this.endVal, this.decimals, this.duration);
    this.animate();
  }

  /**
   * Re-animate if preference is set.
   */
  @HostListener('click')
  onClick() {
    if (this.reanimateOnClick) {
      this.animate();
    }
  }

  constructor(private el: ElementRef) {}

  private createCountUp(sta, end, dec, dur) {
    sta = sta || 0;
    // strip non-numerical characters
    if (isNaN(sta)) {
      sta = Number(sta.match(/[\d\-\.]+/g).join(''));
    }
    end = end || 0;
    if (isNaN(end)) {
      end = Number(end.match(/[\d\-\.]+/g).join(''));
    }
    dur = Number(dur) || 2;
    dec = Number(dec) || 0;

    // construct countUp
    let countUp = new CountUp(this.el.nativeElement, sta, end, dec, dur, this.options);
    const diff = Math.abs(end - sta);
    // make easing smoother for large numbers
    if (diff > 999) {
      const up = (end > sta) ? -1 : 1;
      countUp = new CountUp(this.el.nativeElement, sta, end + (up * 100), dec, dur / 2, this.options);
    }

    return countUp;
  }

  private animate() {
    this.countUp.reset();
    if (this.endVal > 999) {
      this.countUp.start(() => this.countUp.update(this.endVal));
    } else {
      this.countUp.start();
    }
  }
}
