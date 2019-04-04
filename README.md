# CountUp.js Angular ^2 Module

This is an Angular directive wrapper around the core functionality of CountUp which is maintained in the [CountUp.js repo](https://github.com/inorganik/countUp.js). MIT License.

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
<h1 [countUp]="345" (complete)="doSomethingOnComplete()">0</h1>
```

#### Defer animation
Bind the endVal to some property. Leave it undefined and the animation won't start until `endVal` has a value.
```html
<h1 [countUp]="myEndVal" [options]="myOpts">0</h1>
```

Inputs:
- `countUp`: number to count to
- `options`: [CountUpOptions](https://github.com/inorganik/countUp.js#options) - fine-grain control over CountUp
- `reanimateOnClick`: pass false to disable (defaults to true)

Outputs:
- `complete`: emits when the animation completes

## Contributing <a name="contributing"></a>

Before you make a pull request, please follow these instructions:

1. Make your edits to `./projects/count-up/src/lib/count-up.directive.ts`.
1. Run `ng s` and test your changes in the demo app.

Publishing (you don't need to do this, it&rsquo;s for my own reference):

1. Increment the version number if necessary (and `install-tarball` script).
1. Commit changes.
1. Run `yarn package:countup` which builds and packs a tarball.
1. Install the tarball in the test app: `yarn install-tarball`.
1. Make app.module import from newly installed package.
1. Run the test app with AOT compiler and make sure the demo works: `ng serve --prod`.
1. Run `npm publish dist/count-up`
1. Discard changes.