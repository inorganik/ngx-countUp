# ngx-countup

## Building

To build the library, run:

```bash
ng build count-up
```

This command will compile your project, and the build artifacts will be placed in the `dist/` directory.

### Publishing the Library

Once the project is built, you can publish your library by following these steps:

1. Navigate to the `dist` directory:

   ```bash
   cd dist/count-up
   ```

2. Run the `npm publish` command to publish your library to the npm registry:
   ```bash
   npm publish
   ```

THIS NEEDS TO BE UPDATED
Publishing (you don't need to do this, it&rsquo;s for my own reference):

1. Increment the version number if necessary (and `install-tarball` script).
1. Commit changes.
1. Run `npm run package:countup` which builds and packs a tarball.
1. Install the tarball in the test app: `npm run install-tarball`.
1. Make app.module import from newly installed package.
1. Run the test app with AOT compiler and make sure the demo works: `npm run serve:prod`.
1. Run `npm publish dist/count-up`
1. Discard changes.
