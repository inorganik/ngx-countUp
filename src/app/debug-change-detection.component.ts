import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-debug-change-detection',
  template: '<p class="number">{{check()}} zone checks</p>',
  styles: [`
        :host {
          position: absolute;
          left: 10px;
          bottom: 0;
          display: block;
        }
        .number {
          display: block;
        }
    `]
})

export class DebugChangeDetectionComponent {

  count = 0;

  constructor(private zone: NgZone) { }

  check() {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => this.count = this.count + 1);
    });
    return this.count;
  }
}
