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

1. Make your edits to `./projects/count-up/src/lib/count-up.directive.ts`.
1. Run `yarn build:countup`.
1. Pack: `cd dist/count-up && yarn pack`
1. Install the tarball in the test app: `cd ../.. && yarn add file:./dist/count-up/countup.js-angular2-v6.0.2.tgz`
1. Run the test app and make sure the demo works: `ng serve --prod`

