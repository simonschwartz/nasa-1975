import { configure, addDecorator } from '@storybook/react';

configure(require.context('../lib/', true, /\.stories\.(js|mdx)$/), module);
