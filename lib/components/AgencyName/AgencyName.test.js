import React from 'react';
import serializer from 'jest-emotion';
import renderer from 'react-test-renderer';
import AgencyName from './';

expect.addSnapshotSerializer(serializer);

describe('StemLogo component should', () => {
    const TEST_FIXTURES = [
        {
            headingLevel: 1,
            size: 'sm',
            stacked: true,
            centerName: 'John F. Kennedy Space Center',
        },
        {
            headingLevel: 2,
            theme: 'light',
            size: 'xs',
        },
        {
            headingLevel: 3,
            size: 'lg',
        },
        {
            headingLevel: 4,
            theme: 'dark',
            size: 'xl',
            stacked: true,
        },
        {
            headingLevel: 5,
            size: 'md',
            theme: 'red',
            centerName: 'John F. Kennedy Space Center',
        },
    ];

    TEST_FIXTURES.forEach(fixture => {
        test(`render correctly given props ${JSON.stringify(fixture)}`, () => {
            expect(renderer.create(<AgencyName {...fixture} />).toJSON()).toMatchSnapshot();
        });
    });

    test('render correctly given incorrect heading levels', () => {
        expect(renderer.create(<AgencyName headingLevel={0} />).toJSON()).toMatchSnapshot();
        expect(renderer.create(<AgencyName headingLevel={6} />).toJSON()).toMatchSnapshot();
    });

    test('render correctly given no props', () => {
        expect(renderer.create(<AgencyName />).toJSON()).toMatchSnapshot();
    });

    test('render correctly given incorrect prop values', () => {
        expect(
            renderer
                .create(<AgencyName headingLevel="rocket" theme="comet" size="astronaut" />)
                .toJSON(),
        ).toMatchSnapshot();
    });

    test('correctly spread additional props to root element', () => {
        expect(
            renderer.create(<AgencyName style={{ width: '200px' }} />).toJSON(),
        ).toMatchSnapshot();
    });
});
