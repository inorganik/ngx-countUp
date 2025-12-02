import { Component, inject, NgZone } from '@angular/core';

@Component({
  selector: 'app-debug-change-detection',
  template: '<p class="block">{{check()}} zone checks</p>',
  standalone: true,
})
export class DebugChangeDetectionComponent {
  private zone = inject(NgZone);
  count = 0;

  check() {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => (this.count = this.count + 1));
    });
    return this.count;
  }
}
