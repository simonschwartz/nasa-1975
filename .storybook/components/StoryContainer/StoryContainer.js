/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { NASA_RED, NASA_DARK, NASA_LIGHT, NASA_GREY } from '../../../lib/tokens';

const DEFAULT_BACKGROUND = 'light';

const BACKGROUND_COLORS = {
    red: {
        backgroundColor: NASA_RED,
    },
    dark: {
        backgroundColor: NASA_DARK,
    },
    light: {
        backgroundColor: NASA_LIGHT,
    },
    grey: {
        backgroundColor: NASA_GREY,
    },
    medium: {
        backgroundColor: '#F2F2F2',
    },
};

const containerStyle = backgroundColor => {
    const borderColor = backgroundColor === NASA_LIGHT ? '#eee' : backgroundColor;
    return css`
        display: block;
        border-radius: 14px;
        padding: 5rem;
        margin: 2rem 0;
        background: ${backgroundColor};
        max-width: 19rem;
        border: 1px solid ${borderColor};
    `;
};

const StoryContainer = ({ background = DEFAULT_BACKGROUND, children, ...restProps }) => {
    const { backgroundColor } =
        BACKGROUND_COLORS[background] || BACKGROUND_COLORS[DEFAULT_BACKGROUND];

    return (
        <div css={containerStyle(backgroundColor)} {...restProps}>
            {children}
        </div>
    );
};

StoryContainer.propTypes = {
    /** Background colour of container */
    background: PropTypes.oneOf(['dark', 'light', 'red', 'grey', 'medium']),
    /** Container content */
    children: PropTypes.node.isRequired,
};

export default StoryContainer;
