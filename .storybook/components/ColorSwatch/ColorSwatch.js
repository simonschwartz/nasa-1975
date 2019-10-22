/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import StoryContainer from '../StoryContainer';
import { Text } from '../../../lib/components/Typography';

const SwatchesContainer = css`
    display: flex;
    flex-wrap: wrap;
    margin: 3rem 0;
`;

const SwatchContainer = css`
    outline: 1px dashed #eee;
    width: 25%;
`;

const SwatchTextContainer = css`
    padding: 1rem 0.5rem 0.5rem;
`;

const SubText = css`
    color: #333;
    font-size: 0.9rem;
    margin-top: 0.5rem;
`;

const getSwatchStyle = color => {
    return css`
        background-color: ${color};
        width: 100%;
        height: 10rem;
    `;
};

export const ColorSwatchContainer = ({ children, ...restProps }) => {
    return (
        <section css={SwatchesContainer} {...restProps}>
            {children}
        </section>
    );
};

export const ColorSwatch = ({ name, color, children, ...restProps }) => {
    return (
        <div css={SwatchContainer}>
            <div css={SwatchTextContainer}>
                <Text weight="medium">{name}</Text>
                <Text weight="light" css={SubText}>
                    {color}
                </Text>
            </div>
            <div css={getSwatchStyle(color)} />
        </div>
    );
};

ColorSwatchContainer.propTypes = {
    /** Container content */
    children: PropTypes.node.isRequired,
};

ColorSwatch.propTypes = {
    /** Name of swatch */
    name: PropTypes.string.isRequired,
    /** Colour of swatch */
    color: PropTypes.string.isRequired,
};
