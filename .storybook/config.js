import { configure } from '@storybook/react';

configure(require.context('../lib/', true, /\.stories\.(js|mdx)$/), module);
