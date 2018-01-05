import { Directive, ElementRef, HostListener, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as CountUp from 'countup.js';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CountUpDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    get endVal() {
        return this._endVal;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set endVal(value) {
        this._endVal = value;
        if (isNaN(value)) {
            return;
        }
        if (!this.countUp) {
            return;
        }
        this.countUp.update(value);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.countUp = this.createCountUp(this.startVal, this.endVal, this.decimals, this.duration);
        this.animate();
    }
    /**
     * Re-animate if preference is set.
     * @return {?}
     */
    onClick() {
        if (this.reanimateOnClick) {
            this.animate();
        }
    }
    /**
     * @param {?} sta
     * @param {?} end
     * @param {?} dec
     * @param {?} dur
     * @return {?}
     */
    createCountUp(sta, end, dec, dur) {
        sta = sta || 0;
        if (isNaN(sta))
            sta = Number(sta.match(/[\d\-\.]+/g).join('')); // strip non-numerical characters
        end = end || 0;
        if (isNaN(end))
            end = Number(end.match(/[\d\-\.]+/g).join('')); // strip non-numerical characters
        dur = Number(dur) || 2;
        dec = Number(dec) || 0;
        // construct countUp
        debugger;
        let /** @type {?} */ countUp = new CountUp(this.el.nativeElement, sta, end, dec, dur, this.options);
        if (end > 999) {
            // make easing smoother for large numbers
            countUp = new CountUp(this.el.nativeElement, sta, end - 100, dec, dur / 2, this.options);
        }
        return countUp;
    }
    /**
     * @return {?}
     */
    animate() {
        this.countUp.reset();
        if (this.endVal > 999) {
            this.countUp.start(() => this.countUp.update(this.endVal));
        }
        else {
            this.countUp.start();
        }
    }
}
CountUpDirective.decorators = [
    { type: Directive, args: [{
                selector: '[countUp]'
            },] },
];
/** @nocollapse */
CountUpDirective.ctorParameters = () => [
    { type: ElementRef, },
];
CountUpDirective.propDecorators = {
    "options": [{ type: Input, args: ['countUp',] },],
    "startVal": [{ type: Input },],
    "endVal": [{ type: Input },],
    "duration": [{ type: Input },],
    "decimals": [{ type: Input },],
    "reanimateOnClick": [{ type: Input },],
    "onClick": [{ type: HostListener, args: ['click',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CountUpModule {
}
CountUpModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    CountUpDirective
                ],
                exports: [
                    CountUpDirective
                ]
            },] },
];
/** @nocollapse */
CountUpModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { CountUpModule, CountUpDirective as ɵa };
//# sourceMappingURL=countup.js-angular2.js.map
