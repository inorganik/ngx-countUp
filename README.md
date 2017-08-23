# CountUp.js Angular ^2 Module

Animates a numerical value by counting to it.

Despite its name, CountUp can count in either direction, depending on the `startVal` and `endVal` params that you pass.

### [Try the demo](http://inorganik.github.io/countUp.js)

## See Also

- **[CountUp.js repo](https://github.com/inorganik/countUp.js)**
- **[CountUp.js Angular 1.x Module](https://github.com/inorganik/countUp.js-angular1)**
- **[CountUp.js React](https://github.com/glennreyes/react-countup)**
- **[CountUp.js WordPress Plugin](https://wordpress.org/plugins/countup-js/)**

## Usage
Simply import the module from `dist/` into your application module's `imports` array. See example below.

The directive is compatible with Angular version ^2.0.0. Make sure `[countUp.js](https://github.com/inorganik/countUp.js)` is loaded as a global dependency during bootstrapping.

Note the value for the `options` parameter is passed directly to the directive attribute selector.

```ts
import {Component, NgModule} from '@angular/core';

import {CountUpModule} from 'countup.js/dist/countUp.module';

@NgModule({
   imports: [CountUpModule],
   bootstrap: [AppComponent]
})
export class AppModule {}

// ...
// ...
// Use in some component contained within the importing module...

@Component({
   selector: 'counting-header',
   template: `
        <h1 countUp="{useEasing: false}"
            [startVal]="myStartVal"
            [endVal]="myEndVal"
            [reanimateOnClick]="false"></h1>
   `
})
export class CountingHeaderComponent {
    @Input()
    myStartVal: number;

    @Input()
    myEndVal: number;
}
```

## Contributing <a name="contributing"></a>

Before you make a pull request, please be sure to follow these super simple instructions:

1. Do your work on files in the root directory.
2. In Terminal, `cd` to the `countUp.js-angular2` directory.
3. Run `npm install`, which installs gulp and its dependencies.
4. Run `gulp`, which copies and minifies the .js files to the `dist` folder.
