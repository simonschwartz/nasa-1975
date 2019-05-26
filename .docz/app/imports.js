export const imports = {
  'lib/components/Colours/docs/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "lib-components-colours-docs-index" */ 'lib/components/Colours/docs/index.mdx'),
  'lib/components/Typography/docs/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "lib-components-typography-docs-index" */ 'lib/components/Typography/docs/index.mdx'),
  'lib/components/WormLogo/docs/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "lib-components-worm-logo-docs-index" */ 'lib/components/WormLogo/docs/index.mdx'),
}
