import React from 'react';
import serializer from 'jest-emotion';
import renderer from 'react-test-renderer';
import Typography from './';

expect.addSnapshotSerializer(serializer);

describe('Typography component should', () => {
    const TEST_FIXTURES = [
        {
            size: 'xl',
            tag: 'h1',
            weight: 'light',
        },
        {
            size: 'lg',
            tag: 'h2',
            theme: 'light',
        },
        {
            size: 'md',
            tag: 'span',
            weight: 'medium',
        },
        {
            size: 'sm',
            tag: 'h1',
            theme: 'dark',
        },
        {
            size: 'xs',
            weight: 'medium',
        },
    ];

    TEST_FIXTURES.forEach(fixture => {
        test(`render correctly given props ${JSON.stringify(fixture)}`, () => {
            expect(
                renderer
                    .create(<Typography {...fixture}>One small step for man...</Typography>)
                    .toJSON(),
            ).toMatchSnapshot();
        });
    });

    test('render correctly given no children', () => {
        expect(renderer.create(<Typography tag="h2"></Typography>).toJSON()).toMatchSnapshot();
    });

    test('render correctly given no props', () => {
        expect(
            renderer.create(<Typography>One giant leap for mankind</Typography>).toJSON(),
        ).toMatchSnapshot();
    });

    test('render correctly given incorrect prop values', () => {
        expect(
            renderer
                .create(
                    <Typography tag="rocket" weight="comet" size="astronaut" theme="shuttle">
                        Houston we have a problem
                    </Typography>,
                )
                .toJSON(),
        ).toMatchSnapshot();
    });

    test('correctly spread additional props to root element', () => {
        expect(
            renderer
                .create(
                    <Typography style={{ width: '200px' }}>One giant leap for mankind</Typography>,
                )
                .toJSON(),
        ).toMatchSnapshot();
    });
});
