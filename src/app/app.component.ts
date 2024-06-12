import { Component } from '@angular/core';
import { CountUpOptions } from 'countup.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `.vertical-spacer {
      height: 2500px;
      width: 10px;
      background: url(https://t3.ftcdn.net/jpg/03/41/31/88/360_F_341318810_iLrhXO8CD1mLSLIf7RkwXSahVuowqsgP.jpg)
        1px 0;
    }`
  ]
})
export class AppComponent {
  pickANumber = 500;
  endVal = 1000;
  endVal2 = 2000;
  opts: CountUpOptions = {
    enableScrollSpy: true,
  };

  doThisOnComplete() {
    console.log('complete!');
  }

  applyEndVal() {
    this.endVal = Number(this.pickANumber);
  }

  useOptions() {
    this.opts = {
      decimalPlaces: 2,
      separator: ':',
      duration: 5,
    };
  }

  useOptionsAndEndVal() {
    this.opts = {
      decimalPlaces: 1,
      separator: ',',
      duration: 3,
      suffix: " Set options and endVal simultaneously!",
      startVal: this.endVal
    };
    this.endVal = 10000
  }

  resetOptions() {
    this.opts = {
      enableScrollSpy: true,
    };
  }
}
