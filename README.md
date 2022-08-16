# How to reproduce

1. Install dependencies: `yarn install`

2. Go into `node_modules/next-auth/core/lib/assert.js` and force an error for easier debugging in `dev`:

```js
function assertConfig(params) {
  // this ensures an error is returned from `assertConfig`
  return new _errors.MissingSecret('SOME TEST ERROR');

  // ...keep everything else as is
}
```

3. Spin up dev server: `yarn dev`

4. Navigate to http://localhost:3000/example page
