import {
  Directive,
  ElementRef,
  Input,
  Output,
  HostListener,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
} from '@angular/core';
import { CountUp, CountUpOptions } from 'countup.js';

@Directive({
  selector: '[countUp]'
})
export class CountUpDirective implements OnChanges, AfterViewInit {

  countUp: CountUp;
  // the value you want to count to
  @Input('countUp') endVal: number;
  // previous end val enables us to count from last endVal
  // when endVal is changed
  previousEndVal: number;

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

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    if (this.endVal) {
      this.countUp = new CountUp(this.el.nativeElement, this.endVal, this.options);
      this.animate();
      this.previousEndVal = this.endVal;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.endVal && !changes.endVal.firstChange) {
      if (this.previousEndVal != undefined) {
        this.options = {
          ...this.options,
          startVal: this.previousEndVal
        };
      }
      this.countUp = new CountUp(this.el.nativeElement, this.endVal, this.options);
      this.animate();
      this.previousEndVal = this.endVal;
    }
  }

  private animate() {
    this.countUp.reset();
    this.countUp.start(() => {
      this.complete.emit();
    });
  }
}
