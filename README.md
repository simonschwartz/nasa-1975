# NASA 1975

A React design system based on the 1975 NASA Graphics Standards Manual.

## Getting started

To install the NASA 1975 design system, use:

```
npm install nasa-1975-wip
```

## Documentation

[https://nasa-1975.surge.sh/](https://nasa-1975.surge.sh/)

## Releasing

### Documentation

The documentation site is automatically deployed from `master`.

### NPM module

To release a new version of the nasa-1975 NPM module:

Use the relevant command to update the package version

```
npm run components-update-patch
npm run components-update-minor
npm run components-update-major
```

Push changes to `master`.

Push the updated version tag to `master` to trigger deployment to NPM with:

```
git push --tags
```
