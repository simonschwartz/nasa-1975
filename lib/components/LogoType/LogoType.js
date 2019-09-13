/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import WormLogo from '../WormLogo';
import AgencyName from '../AgencyName';

const DEFAULT_SIZE = 'md';
const DEFAULT_THEME = 'dark';

const LOGO_WIDTHS = {
    lg: {
        maxWidth: '17.5rem',
    },
    md: {
        maxWidth: '15.5rem',
    },
    sm: {
        maxWidth: '11rem',
    },
};

const logoStyle = size => {
    const { maxWidth } = LOGO_WIDTHS[size] || LOGO_WIDTHS[DEFAULT_SIZE];

    return css`
        max-width: ${maxWidth};
        height: auto;
    `;
};

const LogoType = ({
    size = DEFAULT_SIZE,
    theme = DEFAULT_THEME,
    stacked,
    headingLevel = 1,
    centerName,
    ...restProps
}) => {
    return (
        <section {...restProps}>
            <WormLogo theme={theme} css={logoStyle(size)} />
            <AgencyName
                size={size}
                stacked={stacked}
                theme={theme}
                headingLevel={headingLevel}
                centerName={centerName}
            />
        </section>
    );
};

LogoType.propTypes = {
    /** Stacked state of Agency name */
    stacked: PropTypes.bool,
    /** HTML heading level */
    headingLevel: PropTypes.oneOf(['1', '2', '3', '4', '5']),
    /** Colour theme of Logo type */
    theme: PropTypes.oneOf(['dark', 'light', 'red']),
    /** Size of the heading */
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    /** Center name eg "John F. Kennedy Space Center" */
    centerName: PropTypes.string,
};

export default LogoType;
