import React from 'react';
import serializer from 'jest-emotion';
import renderer from 'react-test-renderer';
import LogoType from './';

expect.addSnapshotSerializer(serializer);

describe('LogoType component should', () => {
    const TEST_FIXTURES = [
        {
            headingLevel: 1,
            size: 'sm',
            stacked: true,
        },
        {
            headingLevel: 2,
            theme: 'light',
        },
        {
            headingLevel: 3,
            size: 'lg',
            stacked: true,
            centerName: 'John F. Kennedy Space Center',
        },
        {
            headingLevel: 4,
            theme: 'dark',
        },
        {
            headingLevel: 5,
            size: 'md',
            centerName: 'John F. Kennedy Space Center',
        },
    ];

    TEST_FIXTURES.forEach(fixture => {
        test(`render correctly given props ${JSON.stringify(fixture)}`, () => {
            expect(renderer.create(<LogoType {...fixture} />).toJSON()).toMatchSnapshot();
        });
    });

    test('render correctly given no props', () => {
        expect(renderer.create(<LogoType />).toJSON()).toMatchSnapshot();
    });

    test('render correctly given incorrect heading levels', () => {
        expect(renderer.create(<LogoType headingLevel={0} />).toJSON()).toMatchSnapshot();
        expect(renderer.create(<LogoType headingLevel={6} />).toJSON()).toMatchSnapshot();
    });

    test('render correctly given incorrect prop values', () => {
        expect(
            renderer
                .create(
                    <LogoType
                        headingLevel="rocket"
                        theme="comet"
                        size="astronaut"
                        stacked="mars"
                    />,
                )
                .toJSON(),
        ).toMatchSnapshot();
    });

    test('correctly spread additional props to root element', () => {
        expect(renderer.create(<LogoType style={{ width: '200px' }} />).toJSON()).toMatchSnapshot();
    });
});
