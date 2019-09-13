/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { Heading } from '../Typography';
import WormLogo from '../WormLogo';

const DEFAULT_SIZE = 'md';
const DEFAULT_HEADING_LEVEL = 1;

const LOGO_WIDTHS = {
    lg: {
        logoWidth: '300px',
    },
    md: {
        logoWidth: '245px',
    },
    sm: {
        logoWidth: '190px',
    },
};

const FONT_SIZES = {
    lg: {
        fontSize: '7rem',
    },
    md: {
        fontSize: '5.5rem',
    },
    sm: {
        fontSize: '4.4rem',
    },
};

const wrapperStyle = css`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
`;

const logoStyle = size => {
    const { logoWidth } = LOGO_WIDTHS[size] || LOGO_WIDTHS[DEFAULT_SIZE];

    return css`
        height: auto;
        position: relative;
        bottom: -1px;
        flex-shrink: 0;
        margin: 0 5px 0 0;
        width: ${logoWidth};
    `;
};

const fontStyle = size => {
    const { fontSize } = FONT_SIZES[size] || FONT_SIZES[DEFAULT_SIZE];

    return css`
        font-size: ${fontSize};
    `;
};

const StemLogo = ({
    size = DEFAULT_SIZE,
    theme = 'dark',
    headingLevel = DEFAULT_HEADING_LEVEL,
    title,
    ...restProps
}) => {
    if (!title) return null;

    const typographyTheme = theme === 'red' ? 'dark' : theme;

    return (
        <section css={wrapperStyle} {...restProps}>
            <WormLogo css={logoStyle(size)} theme={theme} />
            <Heading
                level={headingLevel}
                weight="light"
                theme={typographyTheme}
                css={fontStyle(size)}
            >
                {title}
            </Heading>
        </section>
    );
};

StemLogo.propTypes = {
    /** HTML heading level */
    headingLevel: PropTypes.oneOf([1, 2, 3, 4, 5]),
    /** Colour theme of StemLogo */
    theme: PropTypes.oneOf(['dark', 'light', 'red']),
    /** Size of the heading */
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    /** Stem Title */
    title: PropTypes.string.isRequired,
};

export default StemLogo;
