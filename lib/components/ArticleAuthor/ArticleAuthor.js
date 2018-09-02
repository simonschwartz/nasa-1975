import React from 'react';
import PropTypes from 'prop-types';
import { cx, css } from 'emotion';
import { fontFamily, fontWeightRegular } from '../../styles';

const container = css`
  list-style-type: none;
  padding: 0;
  margin: 1em 0;
  font-size: 1rem;
  font-family: ${fontFamily};
  font-weight: ${fontWeightRegular};

  li {
    line-height: 1.2;
  }
`;

const ArticleAuthor = ({ name, location = '', phone = '', className = '', ...attributeOptions }) =>
  <ul className={cx(container, className)} {...attributeOptions}>
    <li>
      {name}
    </li>
    {location &&
      <li>
        {location}
      </li>}
    {phone &&
      <li>
        (Phone: {phone})
      </li>}
  </ul>;

ArticleAuthor.propTypes = {
  /** Name of article author */
  name: PropTypes.string.isRequired,
  /** Location of article author */
  location: PropTypes.string,
  /** Contact number for article author */
  phone: PropTypes.string,
  /** className to add to heading */
  className: PropTypes.string
};

export default ArticleAuthor;
