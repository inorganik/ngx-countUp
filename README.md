# ngx-countup - CountUp.js in Angular

This is an Angular directive wrapper around the core functionality of CountUp which is maintained in the [CountUp.js repo](https://github.com/inorganik/countUp.js) by the same author. MIT License.

#### [CountUp.js demo](http://inorganik.github.io/countUp.js)

Or see this angular version work by cloning this project and running `ng serve`.

## Compatibility

| Angular version | ngx-countup version | API Changes                            |
| --------------- | ------------------- | -------------------------------------- |
| 21+             | 21                  | Use `countUpOptions` input for options |
| 13-20           | 13.2.0              | Use `options` input for options        |
| 7-12            | 7.3.3               | -                                      |

Contents:

- [Usage](#usage)
- [Angular Universal](#angular-universal)
- [Testing](#testing)
- [Contributing](#contributing)

## Usage

Install the package in your project. For **Angular 13** and newer:

`npm i ngx-countup`

---

In your component, import the directive:

```ts
import { CountUpDirective } from 'ngx-countup';

@Component({
  selector: 'app-some-component',
  imports: [
    CountUpDirective
  ],
  ...
})
```

Use it in your template. Since it's a directive, it can be added to any element:

```html
<h1 [countUp]="345">0</h1>
```

Inputs:

- `countUp`: number to count to
- `countUpOptions`: [CountUpOptions](https://github.com/inorganik/countUp.js#options) - fine-grain control over CountUp
- `reanimateOnClick`: pass false to disable (defaults to true)

Outputs:

- `complete`: emits when the animation completes

### Scroll Spy!

Scroll spy means it will automatically start animating when the CountUp element scrolls into view. Enable it in the options:

```html
<h1 [countUp]="myEndVal" [countUpOptions]="{ enableScrollSpy: true }">0</h1>
```

### Defer animation

You can defer animation by leaving the property holding the end value undefined. So for instance, you could declare `myEndVal` in your component and the animation won't start until `myEndVal` has a value.

```html
<h1 [countUp]="myEndVal" [countUpOptions]="options">0</h1>
```

### Re-animate

To re-animate CountUp programmatically, add a template ref variable to the markup (with #):

```html
<h1 #countUp [countUp]="myEndVal" [countUpOptions]="myOpts">0</h1>
```

Then, select it with `@ViewChild` in your component's Typescript file (using the template ref # you created).

```ts
  @ViewChild('countUp') countUp: CountUpDirective;
```

Finally, call the animate function where needed.

```ts
this.countUp.animate();
```

Remember to do this inside `ngAfterViewInit()` to do something on component load.

## Contributing

Before you make a pull request, please follow these instructions:

1. Make your edits to `./projects/ngx-countup/src/lib/ngx-countup.directive.ts`.
1. Build the lib: `npm run build:countup`
1. Test your changes in the demo app: `npm start`
1. Ensure tests pass: `npm t -- ngx-countup`
