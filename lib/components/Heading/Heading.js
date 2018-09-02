import React from 'react';
import PropTypes from 'prop-types';
import { cx, css } from 'emotion';
import { fontFamily } from '../../styles';
import './Heading.css';

const headingBase = css`
  margin: 0 0 1rem 0;
  font-family: ${fontFamily}
`;

const fontSizeXL = css`
  font-size: 2.5rem;
  line-height: 1.25;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Heading = ({ size = 'lg', level = '1', weight = 'medium', children, className = '', ...attributeOptions }) => {
  const HeadingTag = `h${level}`;
  return (
    <HeadingTag
      className={cx(headingBase)}
      className={`NASA1975-heading NASA1975-heading--${size} NASA1975-heading--${weight} ${className}`}
      {...attributeOptions}
    >
      {children}
    </HeadingTag>
  );
};

Heading.propTypes = {
  /** Size of the heading */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /** HTML heading level */
  level: PropTypes.oneOf(['1', '2', '3', '4', '5']),
  /** Font weight of heading level */
  weight: PropTypes.oneOf(['medium', 'light']),
  /** Heading content */
  children: PropTypes.node.isRequired,
  /** className to add to heading */
  className: PropTypes.string
};

export default Heading;
