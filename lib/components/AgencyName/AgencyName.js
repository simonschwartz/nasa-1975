/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Typography from '../Typography';
import PropTypes from 'prop-types';

const DEFAULT_SIZE = 'lg';
const DEFAULT_THEME = 'dark';
const DEFAULT_HEADING_LEVEL = 1;

const CENTER_TITLE_MARGINS = {
    xl: {
        marginTop: '0.85rem',
    },
    lg: {
        marginTop: '0.8rem',
    },
    md: {
        marginTop: '0.75rem',
    },
    sm: {
        marginTop: '0.7rem',
    },
    xs: {
        marginTop: '0.55rem',
    },
};

const TYPOGRAPHY_THEMES = {
    red: {
        typographyTheme: 'dark',
    },
    dark: {
        typographyTheme: 'dark',
    },
    light: {
        typographyTheme: 'light',
    },
};

const block = css`
    display: block;
`;

const noWrap = css`
    white-space: nowrap;
`;

const centerHeading = size => {
    const { marginTop } = CENTER_TITLE_MARGINS[size] || CENTER_TITLE_MARGINS[DEFAULT_SIZE];

    return css`
        display: block;
        margin-top: ${marginTop};
    `;
};

const AgencyName = ({
    stacked,
    headingLevel = DEFAULT_HEADING_LEVEL,
    size = DEFAULT_SIZE,
    theme = DEFAULT_THEME,
    centerName,
    ...restProps
}) => {
    const isHeadingLevelValid = value => {
        if (typeof value !== 'number') return false;
        if (value < 1) return false;
        if (value > 5) return false;
        return true;
    };

    const HeadingTag = isHeadingLevelValid(headingLevel)
        ? `h${headingLevel}`
        : `h${DEFAULT_HEADING_LEVEL}`;

    const InlineName = () => (
        <span>
            <span css={block}>
                National <span css={noWrap}>Aeronautics and</span>
            </span>
            <span css={block}>Space Administration</span>
        </span>
    );

    const StackedName = () => (
        <span>
            <span css={block}>National</span>
            <span css={block}>Aeronautics and</span>
            <span css={block}>Space</span>
            <span css={block}>Administration</span>
        </span>
    );

    const { typographyTheme } = TYPOGRAPHY_THEMES[theme] || TYPOGRAPHY_THEMES[DEFAULT_THEME];
    const commonTypographyProps = {
        size,
        theme: typographyTheme,
    };

    return (
        <Typography tag={HeadingTag} weight="light" {...commonTypographyProps} {...restProps}>
            {stacked ? <StackedName /> : <InlineName />}
            <Typography
                tag="span"
                weight="medium"
                css={centerHeading(size)}
                {...commonTypographyProps}
            >
                {centerName}
            </Typography>
        </Typography>
    );
};

AgencyName.propTypes = {
    /** Stacked state of Agency name */
    stacked: PropTypes.bool,
    /** HTML heading level */
    headingLevel: PropTypes.oneOf([1, 2, 3, 4, 5]),
    /** Size of the heading */
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    /** Colour theme of agency name */
    theme: PropTypes.oneOf(['dark', 'light', 'red']),
    /** Center name eg "John F. Kennedy Space Center" */
    centerName: PropTypes.string,
};

export default AgencyName;
