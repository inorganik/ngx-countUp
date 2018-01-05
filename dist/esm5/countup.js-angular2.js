import { Directive, ElementRef, HostListener, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as CountUp from 'countup.js';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CountUpDirective = (function () {
    /**
     * @param {?} el
     */
    function CountUpDirective(el) {
        this.el = el;
    }
    Object.defineProperty(CountUpDirective.prototype, "endVal", {
        /**
         * @return {?}
         */
        get: function () {
            return this._endVal;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._endVal = value;
            if (isNaN(value)) {
                return;
            }
            if (!this.countUp) {
                return;
            }
            this.countUp.update(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CountUpDirective.prototype.ngAfterViewInit = function () {
        this.countUp = this.createCountUp(this.startVal, this.endVal, this.decimals, this.duration);
        this.animate();
    };
    /**
     * Re-animate if preference is set.
     * @return {?}
     */
    CountUpDirective.prototype.onClick = function () {
        if (this.reanimateOnClick) {
            this.animate();
        }
    };
    /**
     * @param {?} sta
     * @param {?} end
     * @param {?} dec
     * @param {?} dur
     * @return {?}
     */
    CountUpDirective.prototype.createCountUp = function (sta, end, dec, dur) {
        sta = sta || 0;
        if (isNaN(sta))
            sta = Number(sta.match(/[\d\-\.]+/g).join('')); // strip non-numerical characters
        end = end || 0;
        if (isNaN(end))
            end = Number(end.match(/[\d\-\.]+/g).join('')); // strip non-numerical characters
        dur = Number(dur) || 2;
        dec = Number(dec) || 0;
        // construct countUp
        var /** @type {?} */ countUp = new CountUp(this.el.nativeElement, sta, end, dec, dur, this.options);
        if (end > 999) {
            // make easing smoother for large numbers
            countUp = new CountUp(this.el.nativeElement, sta, end - 100, dec, dur / 2, this.options);
        }
        return countUp;
    };
    /**
     * @return {?}
     */
    CountUpDirective.prototype.animate = function () {
        var _this = this;
        this.countUp.reset();
        if (this.endVal > 999) {
            this.countUp.start(function () { return _this.countUp.update(_this.endVal); });
        }
        else {
            this.countUp.start();
        }
    };
    return CountUpDirective;
}());
CountUpDirective.decorators = [
    { type: Directive, args: [{
                selector: '[countUp]'
            },] },
];
/** @nocollapse */
CountUpDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
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
var CountUpModule = (function () {
    function CountUpModule() {
    }
    return CountUpModule;
}());
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
CountUpModule.ctorParameters = function () { return []; };
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
