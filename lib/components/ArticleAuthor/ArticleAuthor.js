import React from "react";
import PropTypes from "prop-types";
import "./ArticleAuthor.css";

const ArticleAuthor = ({
  name,
  location = "",
  phone = "",
  className = "",
  ...attributeOptions
}) =>
  <ul className={`NASA1975-article-author ${className}`} {...attributeOptions}>
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
