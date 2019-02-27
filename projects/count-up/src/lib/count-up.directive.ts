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
import { CountUp, CountUpOptions } from 'countup.js';

@Directive({
  selector: '[countUp]'
})
export class CountUpDirective implements OnChanges {

  countUp: CountUp;
  // the value you want to count to
  @Input('countUp') endVal: number;

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

  ngOnChanges(changes: SimpleChanges) {
    if (changes.endVal && changes.endVal.currentValue) {
      this.countUp = new CountUp(this.el.nativeElement, this.endVal, this.options);
      this.animate();
    }
  }

  private animate() {
    this.countUp.reset();
    this.countUp.start(() => {
      this.complete.emit();
    });
  }
}
