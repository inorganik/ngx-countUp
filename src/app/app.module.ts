import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// import { CountUpModule } from 'ngx-countup';
import { CountUpModule } from '../../projects/count-up/src/lib/count-up.module';
import { DebugChangeDetectionComponent } from './debug-change-detection.component';

@NgModule({
  declarations: [
    AppComponent,
    DebugChangeDetectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CountUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
