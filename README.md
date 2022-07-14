# ngx-countup - CountUp.js in Angular

This is an Angular directive wrapper around the core functionality of CountUp which is maintained in the [CountUp.js repo](https://github.com/inorganik/countUp.js). MIT License.

#### [CountUp.js demo](http://inorganik.github.io/countUp.js)
Or see this angular version work by cloning this project and running `ng serve`.

This module supports Angular 7 and newer. The CountUp module for Angular 1.x is [here](https://github.com/inorganik/countUp.js-angular1).

Contents:
- [Usage](#usage)
- [Angular Universal](#angular-universal)
- [Testing](#testing)
- [Contributing](#contributing)

## Usage

Install the package in your project. For **Angular 13** and newer:

`npm i ngx-countup`

If you are using an **older version of Angular**, use the following:

`npm i ngx-countup@7`

---

In `app.module.ts`, import the module:
```ts
import { CountUpModule } from 'ngx-countup';

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

Inputs:
- `countUp`: number to count to
- `options`: [CountUpOptions](https://github.com/inorganik/countUp.js#options) - fine-grain control over CountUp
- `reanimateOnClick`: pass false to disable (defaults to true)

Outputs:
- `complete`: emits when the animation completes

### Scroll Spy!

Scroll spy means it will automatically start animating when the CountUp element scrolls into view. Enable it in the options:

```html
<h1 [countUp]="myEndVal" [options]="{ enableScrollSpy: true }">0</h1>
```

### Defer animation

Bind [countUp] to some property. Leave `myEndVal` undefined and the animation won't start until `myEndVal` has a value.
```html
<h1 [countUp]="myEndVal" [options]="myOpts">0</h1>
```
### Re-animate

To re-animate CountUp programmatically, add a template ref variable to the markup (with #):

```html
<h1 #countUp [countUp]="myEndVal" [options]="myOpts">0</h1>
```

Then, select it with `@ViewChild` in your component's Typescript file (using the template ref # you created). 

```ts
  @ViewChild('countUp') countUp: CountUpDirective;
```

Finally, call the animate function where need be.

```ts
  this.countUp.animate();
```

Remember to do this inside `ngAfterViewInit()` to do something on component load.

## Angular Universal

Yes, this component works with SSR and prerendering!

Check out this separate [SSR demo repo](https://github.com/inorganik/ngx-countup-with-ssr) for a working example.


## Testing

The test app in this repo has a passing test for a component that uses the CountUp directive, which you can use as an example.  If your component uses the CountUp directive, include the CountUpModule in your TestBed:

```
beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      CountUpModule,
      ...
    ],
    ...
  })
});
```

For Jest, I used [jest-preset-angular](https://github.com/thymikee/jest-preset-angular). Make sure you have the following in your jest.config.js:

```
transform: {
  '^.+\\.(js|ts|tsx)$': 'ts-jest'
},
transformIgnorePatterns: ['node_modules/(?!countup.js)']
```
And make sure you add this under `compilerOptions` in your root tsconfig.json:
```
"allowJs": true,
```

## Contributing

Before you make a pull request, please follow these instructions:

1. Make your edits to `./projects/count-up/src/lib/count-up.directive.ts`.
1. Run `npm start` and test your changes in the demo app.

Publishing (you don't need to do this, it&rsquo;s for my own reference):

1. Increment the version number if necessary (and `install-tarball` script).
1. Commit changes.
1. Run `npm run package:countup` which builds and packs a tarball.
1. Install the tarball in the test app: `npm run install-tarball`.
1. Make app.module import from newly installed package.
1. Run the test app with AOT compiler and make sure the demo works: `ng serve --prod`.
1. Run `npm publish dist/count-up`
1. Discard changes.