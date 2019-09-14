/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import {
    FONT_FAMILY_DEFAULT,
    FONT_WEIGHT_HEADING_LIGHT,
    FONT_WEIGHT_TEXT_LIGHT,
    FONT_WEIGHT_MEDIUM,
    FONT_COLOR_LIGHT,
    FONT_COLOR_DARK,
    FONT_SIZE_XL,
    LINE_HEIGHT_XL,
    FONT_SIZE_LG,
    LINE_HEIGHT_LG,
    FONT_SIZE_MD,
    LINE_HEIGHT_MD,
    FONT_SIZE_SM,
    LINE_HEIGHT_SM,
    FONT_SIZE_XS,
    LINE_HEIGHT_XS,
} from '../../tokens';

const DEFAULT_FONT_SIZE_HEADING = 'lg';
const DEFAULT_FONT_SIZE_TEXT = 'xs';
const DEFAULT_HEADING_LEVEL = '1';
const DEFAULT_TEXT_TAG = 'p';

const FONT_SIZES = {
    xl: {
        fontSize: FONT_SIZE_XL,
        lineHeight: LINE_HEIGHT_XL,
    },
    lg: {
        fontSize: FONT_SIZE_LG,
        lineHeight: LINE_HEIGHT_LG,
    },
    md: {
        fontSize: FONT_SIZE_MD,
        lineHeight: LINE_HEIGHT_MD,
    },
    sm: {
        fontSize: FONT_SIZE_SM,
        lineHeight: LINE_HEIGHT_SM,
    },
    xs: {
        fontSize: FONT_SIZE_XS,
        lineHeight: LINE_HEIGHT_XS,
    },
};

const commonStyle = theme => {
    const fontColor = theme === 'light' ? FONT_COLOR_LIGHT : FONT_COLOR_DARK;

    return css`
        color: ${fontColor};
        font-family: ${FONT_FAMILY_DEFAULT};
        margin: 0;
    `;
};

const headingStyle = (theme, weight, size) => {
    const fontWeight = weight === 'light' ? FONT_WEIGHT_HEADING_LIGHT : FONT_WEIGHT_MEDIUM;
    const { fontSize, lineHeight } = FONT_SIZES[size] || FONT_SIZES[DEFAULT_FONT_SIZE_HEADING];

    return css`
        ${commonStyle(theme, weight)};
        font-weight: ${fontWeight};
        font-size: ${fontSize};
        line-height: ${lineHeight};
    `;
};

const textStyle = (theme, weight, size) => {
    const fontWeight = weight === 'light' ? FONT_WEIGHT_TEXT_LIGHT : FONT_WEIGHT_MEDIUM;
    const { fontSize, lineHeight } = FONT_SIZES[size] || FONT_SIZES[DEFAULT_FONT_SIZE_TEXT];

    return css`
        ${commonStyle(theme, weight)};
        font-weight: ${fontWeight};
        font-size: ${fontSize};
        line-height: ${lineHeight};
    `;
};

export const Heading = ({
    size = DEFAULT_FONT_SIZE_HEADING,
    theme = 'dark',
    weight = 'medium',
    level = DEFAULT_HEADING_LEVEL,
    children,
    ...restProps
}) => {
    if (!children) return null;

    const isHeadingLevelValid = value => {
        if (typeof value !== 'number') return false;
        if (value < 1) return false;
        if (value > 5) return false;
        return true;
    };

    const HeadingTag = isHeadingLevelValid(level) ? `h${level}` : `h${DEFAULT_HEADING_LEVEL}`;

    return (
        <HeadingTag css={headingStyle(theme, weight, size)} {...restProps}>
            {children}
        </HeadingTag>
    );
};

export const Text = ({
    size = DEFAULT_FONT_SIZE_TEXT,
    theme = 'dark',
    weight = 'light',
    tag = DEFAULT_TEXT_TAG,
    children,
    ...restProps
}) => {
    if (!children) return null;
    const Tag = (typeof tag === 'string' && tag.toLowerCase()) || DEFAULT_TEXT_TAG;

    return (
        <Tag css={textStyle(theme, weight, size)} {...restProps}>
            {children}
        </Tag>
    );
};

Heading.propTypes = {
    /** Size of the text */
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    /** Colour theme of text */
    theme: PropTypes.oneOf(['dark', 'light']),
    /** Weight of the text */
    weight: PropTypes.oneOf(['medium', 'light']),
    /** HTML heading level */
    level: PropTypes.oneOf([1, 2, 3, 4, 5]),
    /** Text content */
    children: PropTypes.node.isRequired,
};

Text.propTypes = {
    /** Size of the text */
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    /** Colour theme of text */
    theme: PropTypes.oneOf(['dark', 'light']),
    /** Weight of the text */
    weight: PropTypes.oneOf(['medium', 'light']),
    /** Valid HTML tag to wrap content */
    tag: PropTypes.string,
    /** Text content */
    children: PropTypes.node.isRequired,
};
