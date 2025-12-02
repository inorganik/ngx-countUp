import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-debug-change-detection',
  template: '<p class="block">{{check()}} zone checks</p>',
})
export class DebugChangeDetectionComponent {
  count = 0;

  constructor(private zone: NgZone) {}

  check() {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => (this.count = this.count + 1));
    });
    return this.count;
  }
}
