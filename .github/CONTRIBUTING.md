# Contributing

- [Getting Started](#getting-started)
- [Testing](#testing)
- [Deployment](#deployment)

## Getting started

Start by [forking the NASA-1975 GitHub project](https://github.com/simonschwartz/nasa-1975#fork-destination-box) and installing dependencies.

```
git clone git@github.com:<your-user>/nasa-1975.git
cd nasa-1975
npm install
```

## Testing

Run tests using [Jest](https://facebook.github.io/jest/) with:

```
npm run test
```

You can view updates to components with [storybook](https://github.com/storybooks/storybook). Run storybook locally with:

```
npm run storybook
```

## Deployment

This project has 2 deployable artifacts, Documentation and NPM module.

### Deploy Documentation

Any update to `master` will trigger an update to the documentation site. The documentation site is the generated storybook build.

### Deploy NPM module

Any new tag deployed to `master` will trigger an update to the nasa-1975 NPM module.

To create a new tag, checkout `master` then use the relevant command to update the package version

```
npm run components-update-patch
npm run components-update-minor
npm run components-update-major
```

Push the updated version tag to `master` to trigger deployment to NPM with:

```
git push --tags
```

You may also want to [add a changelog to the new release](https://github.com/simonschwartz/nasa-1975/releases).
