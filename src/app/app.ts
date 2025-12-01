import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styles: `
    .vertical-spacer {
      height: 2500px;
      width: 10px;
      background: url(https://t3.ftcdn.net/jpg/03/41/31/88/360_F_341318810_iLrhXO8CD1mLSLIf7RkwXSahVuowqsgP.jpg)
        1px 0;
    }
  `,
})
export class App {
  protected readonly title = signal('ngx-countUp');
}
