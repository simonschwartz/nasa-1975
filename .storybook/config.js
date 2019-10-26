import { Fragment } from 'react';
import { configure, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { FONT_FAMILY_DEFAULT } from '../lib/tokens';

const theme = create({
    base: 'light',
    fontBase: FONT_FAMILY_DEFAULT,
    brandTitle: 'NASA 1975',
    brandImage: 'https://github.com/simonschwartz/nasa-1975/raw/master/nasa-worm.png',
});

addParameters({
    options: {
        theme,
    },
});

const loaderFn = () => {
    const allExports = [
        require('../lib/index.stories.mdx'),
        require('../lib/components/WormLogo/WormLogo.stories.mdx'),
        require('../lib/components/LogoType/LogoType.stories.mdx'),
    ];
    const req = require.context('../lib', true, /\.stories\.mdx$/);
    req.keys().forEach(fname => allExports.push(req(fname)));
    return allExports;
};

configure(loaderFn, module);
