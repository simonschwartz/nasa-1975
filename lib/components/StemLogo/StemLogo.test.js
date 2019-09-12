import React from 'react';
import serializer from 'jest-emotion';
import renderer from 'react-test-renderer';
import StemLogo from './';

expect.addSnapshotSerializer(serializer);

describe('StemLogo component should', () => {
    const TEST_FIXTURES = [
        {
            headingLevel: 'xl',
            size: 'sm',
        },
        {
            headingLevel: 'lg',
            theme: 'light',
        },
        {
            headingLevel: 'md',
            size: 'lg',
        },
        {
            headingLevel: 'sm',
            theme: 'dark',
        },
        {
            headingLevel: 'xs',
            size: 'md',
        },
    ];

    TEST_FIXTURES.forEach(fixture => {
        test(`render correctly given props ${JSON.stringify(fixture)}`, () => {
            expect(
                renderer.create(<StemLogo title="Space" {...fixture} />).toJSON(),
            ).toMatchSnapshot();
        });
    });

    test('render correctly given no title', () => {
        expect(renderer.create(<StemLogo />).toJSON()).toMatchSnapshot();
    });

    test('render correctly given no props', () => {
        expect(renderer.create(<StemLogo title="Space" />).toJSON()).toMatchSnapshot();
    });

    test('render correctly given incorrect prop values', () => {
        expect(
            renderer
                .create(
                    <StemLogo headingLevel="rocket" theme="comet" size="astronaut" title="Space" />,
                )
                .toJSON(),
        ).toMatchSnapshot();
    });

    test('correctly spread additional props to root element', () => {
        expect(
            renderer.create(<StemLogo title="Space" style={{ width: '200px' }} />).toJSON(),
        ).toMatchSnapshot();
    });
});
