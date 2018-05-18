import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpDirective } from './countup.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CountUpDirective
  ],
  exports: [
    CountUpDirective
  ]
})
export class CountUpModule { }
