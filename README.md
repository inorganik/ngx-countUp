# CountUp.js Angular ^2 Module

This is an Angular directive wrapper around the core functionality of CountUp which is maintained in the [CountUp.js repo](https://github.com/inorganik/countUp.js).

#### [CountUp.js demo](http://inorganik.github.io/countUp.js)
Or see this angular version work by cloning this project and running `ng serve`.

## Usage

Install the package in your project:

`yarn add countup.js-angular2` or `npm i countup.js-angular2`

In `app.module.ts`, import the module:
```ts
import { CountUpModule } from 'countup.js-angular2';

@NgModule({
  imports: [
    ...
    CountUpModule
  ],
  ...
})
```

Use it in your markup. Since it's a directive, it can be added to any element:
```html
<h1 countUp endVal="345">0</h1>
```

You may want to bind the endVal to some property. Put brackets on the attribute and set the value to the property. This also allows you to defer the animation - it won't start until `endVal` has a value.
```html
<h1 countUp [endVal]="myEndVal" (complete)="doSomethingOnComplete()">0</h1>
```
Inputs:
- `startVal`: number to start at
- `endVal`: number to count to
- `duration`: duration of counting animation in seconds
- `decimals`: formatted to this many decimal places
- `reanimateOnClick`: pass true to enable
- `countUp`: options object passed directly to the directive attribute selector. More about options in the [CountUp.js repo](https://github.com/inorganik/countUp.js).

Outputs:
- `complete`: emits when the animation completes


## Contributing <a name="contributing"></a>

Before you make a pull request, please follow these instructions:

1. Make your edits to `./projects/count-up/src/lib/count-up.directive.ts`.
1. Increment the version number if necessary (and `install-tarball` script).
1. Run `yarn package:countup` which builds and packs a tarball.
1. Install the tarball in the test app: `yarn install-tarball`.
1. Run the test app and make sure the demo works: `ng serve --prod`.
1. Remove the tarball package by running `yarn reset:countup` before committing.
1. Commit and push.

