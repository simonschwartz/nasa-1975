import React from 'react';
import serializer from 'jest-emotion';
import renderer from 'react-test-renderer';
import { Heading, Text } from './';

expect.addSnapshotSerializer(serializer);

describe('Heading component should', () => {
    const HEADING_TEST_FIXTURES = [
        {
            size: 'xl',
            level: 1,
            weight: 'light',
        },
        {
            size: 'lg',
            level: 2,
            theme: 'light',
        },
        {
            size: 'md',
            level: 3,
            weight: 'medium',
        },
        {
            size: 'sm',
            level: 4,
            theme: 'dark',
        },
        {
            size: 5,
            weight: 'medium',
        },
    ];

    HEADING_TEST_FIXTURES.forEach(fixture => {
        test(`render correctly given props ${JSON.stringify(fixture)}`, () => {
            expect(
                renderer.create(<Heading {...fixture}>One small step for man...</Heading>).toJSON(),
            ).toMatchSnapshot();
        });
    });

    test('render correctly given no children', () => {
        expect(renderer.create(<Heading level={2}></Heading>).toJSON()).toMatchSnapshot();
    });

    test('render correctly given no props', () => {
        expect(
            renderer.create(<Heading>One giant leap for mankind</Heading>).toJSON(),
        ).toMatchSnapshot();
    });

    test('render correctly given incorrect prop values', () => {
        expect(
            renderer
                .create(
                    <Heading level={10} weight="comet" size="astronaut" theme="shuttle">
                        Houston we have a problem
                    </Heading>,
                )
                .toJSON(),
        ).toMatchSnapshot();
    });

    test('correctly spread additional props to root element', () => {
        expect(
            renderer
                .create(<Heading style={{ width: '200px' }}>One giant leap for mankind</Heading>)
                .toJSON(),
        ).toMatchSnapshot();
    });
});

describe('Text component should', () => {
    const TEXT_TEST_FIXTURES = [
        {
            size: 'xl',
            tag: 'span',
            weight: 'light',
        },
        {
            size: 'lg',
            tag: 'em',
            theme: 'light',
        },
        {
            size: 'md',
            tag: 'p',
            weight: 'medium',
        },
        {
            size: 'sm',
            tag: 'Section',
            theme: 'dark',
        },
        {
            size: 5,
            weight: 'medium',
        },
    ];

    TEXT_TEST_FIXTURES.forEach(fixture => {
        test(`render correctly given props ${JSON.stringify(fixture)}`, () => {
            expect(
                renderer.create(<Text {...fixture}>One small step for man...</Text>).toJSON(),
            ).toMatchSnapshot();
        });
    });

    test('render correctly given no children', () => {
        expect(renderer.create(<Text tag="header"></Text>).toJSON()).toMatchSnapshot();
    });

    test('render correctly given no props', () => {
        expect(renderer.create(<Text>One giant leap for mankind</Text>).toJSON()).toMatchSnapshot();
    });

    test('render correctly given incorrect prop values', () => {
        expect(
            renderer
                .create(
                    <Text tag="houston" weight="comet" size="astronaut" theme="shuttle">
                        Houston we have a problem
                    </Text>,
                )
                .toJSON(),
        ).toMatchSnapshot();
    });

    test('correctly spread additional props to root element', () => {
        expect(
            renderer
                .create(<Text style={{ width: '200px' }}>One giant leap for mankind</Text>)
                .toJSON(),
        ).toMatchSnapshot();
    });
});
