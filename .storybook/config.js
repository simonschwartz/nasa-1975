import { configure, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { FONT_FAMILY_DEFAULT } from '../lib/tokens';

const theme = create({
    base: 'light',

    // Typography
    fontBase: FONT_FAMILY_DEFAULT,

    brandTitle: 'NASA 1975',
    brandImage: 'https://github.com/simonschwartz/nasa-1975/raw/master/nasa-worm.png',
});

addParameters({
    options: {
        theme,
        storySort: (a, b) => {
            if (a[1].id === 'welcome--page') return -1;
            return a[1].id.localeCompare(b[1].id);
        },
    },
});

configure(require.context('../lib/', true, /\.stories\.(js|mdx)$/), module);
