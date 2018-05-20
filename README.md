# CountUp.js Angular ^2 Module

This is an Angular directive wrapper around the core functionality of CountUp which is maintained in the [CountUp.js repo](https://github.com/inorganik/countUp.js).

#### [CountUp.js demo](http://inorganik.github.io/countUp.js)
Or see this angular version work by cloning this project and running `ng serve`.

## Usage

Install the package in your project:

`yarn add countup.js-angular2` or `npm i countup.js-angular2 --save`

In `app.module.ts`, import the module:
```ts
import { CountUpModule } from 'countup.js-angular2';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    CountUpModule
  ],
  providers: [
    ...
  ],
  bootstrap: [AppComponent]
})
```

Use it in your markup. Since it's a directive, it can be added to any element:
```html
<h1 countUp endVal="345">0</h1>
```

You may want to bind the endVal to some property. Put brackets on the attribute and set the value to the property:
```html
<h1 countUp [endVal]="myEndVal">0</h1>
```
The CountUp directive accepts the following attribute values:
- `startVal`: number to start at
- `endVal`: number to count to
- `duration`: duration of counting animation in seconds
- `decimals`: formatted to this many decimal places
- `reanimateOnClick`: pass true to enable
- `countUp`: options object passed directly to the directive attribute selector. More about options in the [CountUp.js repo](https://github.com/inorganik/countUp.js).

## Contributing <a name="contributing"></a>

Before you make a pull request, please follow these instructions:

1. Make your edits to `./src/app/countup/countup.directive.ts`.
1. Run the linter: `ng lint`.
1. Test your changes by running the angular shell app: `ng s`.

If everything looks good, you can stop here and make a pull request. 
Here's how to test your changes in a package:

1. Run `yarn packagr`.
1. Pack: `cd dist && yarn pack`
1. Copy the .tgz file into the root of an angular test application.
1. From the test app, install your tarball: `yarn add ./path/to/tarball.tgz`
1. Follow usage instructions above and test functionality.
1. Test prod build: `ng serve --prod`

