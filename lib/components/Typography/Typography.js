/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import {
    FONT_FAMILY_DEFAULT,
    FONT_WEIGHT_LIGHT,
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

const DEFAULT_FONT_SIZE = 'md';

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

const textStyle = (theme, weight, size) => {
    const fontColor = theme === 'light' ? FONT_COLOR_LIGHT : FONT_COLOR_DARK;
    const fontWeight = weight === 'light' ? FONT_WEIGHT_LIGHT : FONT_WEIGHT_MEDIUM;
    const { fontSize, lineHeight } = FONT_SIZES[size] || FONT_SIZES[DEFAULT_FONT_SIZE];

    return css`
        color: ${fontColor};
        font-family: ${FONT_FAMILY_DEFAULT};
        font-weight: ${fontWeight};
        font-size: ${fontSize};
        line-height: ${lineHeight};
        margin: 0;
    `;
};

const Typography = ({
    size = DEFAULT_FONT_SIZE,
    theme = 'dark',
    weight = 'light',
    tag,
    children,
    ...restProps
}) => {
    const Tag = typeof tag === 'string' && tag.toLowerCase();

    return (
        <Tag css={textStyle(theme, weight, size)} {...restProps}>
            {children}
        </Tag>
    );
};

Typography.propTypes = {
    /** Size of the text */
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    /** Colour theme of text */
    theme: PropTypes.oneOf(['dark', 'light']),
    /** Weight of the text */
    weight: PropTypes.oneOf(['medium', 'light']),
    /** Valid HTML tag to wrap content */
    tag: PropTypes.string,
    /** Text content */
    children: PropTypes.node,
};

export default Typography;
