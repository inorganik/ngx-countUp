import { ElementRef, AfterViewInit } from '@angular/core';
export declare class CountUpDirective implements AfterViewInit {
    private el;
    /**
     * Optional extra configuration, such as easing.
     */
    options: any;
    /**
     * Optional start value for the count. Defaults to zero.
     */
    startVal: number;
    /**
     * The value to count up to.
     */
    private _endVal;
    endVal: number;
    /**
     * Optional duration of the animation. Default is two seconds.
     */
    duration: number;
    /**
     * Optional number of decimal places. Default is two.
     */
    decimals: number;
    /**
     * Optional flag for specifying whether the element should re-animate when clicked.
     * Default is true.
     */
    reanimateOnClick: boolean;
    ngAfterViewInit(): void;
    /**
     * Re-animate if preference is set.
     */
    onClick(): void;
    private countUp;
    constructor(el: ElementRef);
    private createCountUp(sta, end, dec, dur);
    private animate();
}
