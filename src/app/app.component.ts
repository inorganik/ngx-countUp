import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  pickANumber = 7890;
  endVal: number;

  doThisOnComplete() {
    console.log('complete!');
  }
}
