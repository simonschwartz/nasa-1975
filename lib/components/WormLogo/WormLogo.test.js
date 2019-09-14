import React from 'react';
import renderer from 'react-test-renderer';
import WormLogo from './';

describe('WormLogo component should', () => {
    test('render correctly given no props', () => {
        expect(renderer.create(<WormLogo />).toJSON()).toMatchSnapshot();
    });

    test('render correctly given incorrect theme value', () => {
        expect(renderer.create(<WormLogo theme="rocket" />).toJSON()).toMatchSnapshot();
    });

    ['red', 'dark', 'light'].forEach(theme => {
        test(`render correctly given ${theme} theme`, () => {
            expect(renderer.create(<WormLogo theme={theme} />).toJSON()).toMatchSnapshot();
        });
    });

    test('correctly spread additional props to root element', () => {
        expect(renderer.create(<WormLogo style={{ width: '200px' }} />).toJSON()).toMatchSnapshot();
    });
});
