import React, { createElement } from "react";
import { css } from "emotion";
import styled from "react-emotion";
import PropTypes from "prop-types";

const fontSizes = {
  xl: { fontSize: "3rem", fontSizeMobile: "2.5rem", lineHeight: 1.25 },
  lg: { fontSize: "2.5rem", fontSizeMobile: "2rem", lineHeight: 1.3 },
  md: { fontSize: "2rem", fontSizeMobile: "1.75rem", lineHeight: 1.25 },
  sm: { fontSize: "1.5rem", fontSizeMobile: "1.25rem", lineHeight: 1.33333 },
  xs: { fontSize: "1.25rem", fontSizeMobile: "1rem", lineHeight: 1.2 }
};

const HeadingStyles = ({ size, weight }) => {
  let fontWeight = 600;
  if (weight === "light") {
    fontWeight = 300;
  }

  return css`
  font-family: "Helvetica", "Segoe UI", Arial, sans-serif;
  margin: 0 0 1rem 0;
  font-weight: ${fontWeight};
  font-size: ${fontSizes[size].fontSizeMobile};
  line-height: ${fontSizes[size].lineHeight};
  @media (min-width: 768px) {
    font-size: ${fontSizes[size].fontSize};
  }
`;
};

const HeadingTag = styled(({ level, children, ...props }) =>
  createElement(`h${level}`, props, children)
)(HeadingStyles);

const Heading = props => <HeadingTag {...props} />;

Heading.propTypes = {
  /** Size of the heading */
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  /** HTML heading level */
  level: PropTypes.oneOf(["1", "2", "3", "4", "5"]),
  /** Font weight of heading level */
  weight: PropTypes.oneOf(["medium", "light"]),
  /** Heading content */
  children: PropTypes.node.isRequired,
  /** className to add to heading */
  className: PropTypes.string
};

export default Heading;
