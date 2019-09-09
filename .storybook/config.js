import { configure, addDecorator } from '@storybook/react';

configure(require.context('../lib/components', true, /\.stories\.(js|mdx)$/), module);
