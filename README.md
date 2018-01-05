# CountUp.js Angular ^2 Module

This is an Angular directive wrapper around the core functionality of CountUp which is maintained in the [CountUp.js repo](https://github.com/inorganik/countUp.js).

#### [Try the demo](http://inorganik.github.io/countUp.js)


## Usage

Install the package in your project:

`yarn add countup.js-angular2` or `npm install countup.js-angular2 --save`

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

Before you make a pull request, please be sure to follow these super simple instructions:

1. Make your edits to `countUp.directive.ts` in the root directory.
2. Run `yarn build`. That's it!
