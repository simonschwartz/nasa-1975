import React from "react";
import PropTypes from "prop-types";
import "./Heading.css";

const Heading = ({
  size = "lg",
  level = "1",
  weight = "medium",
  children,
  className = "",
  ...attributeOptions
}) => {
  const HeadingTag = `h${level}`;
  return (
    <HeadingTag
      className={`NASA1975-heading NASA1975-heading--${size} NASA1975-heading--${weight} ${className}`}
      {...attributeOptions}
    >
      {children}
    </HeadingTag>
  );
};

Heading.propTypes = {
  /** Size of the heading */
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  /** HTML heading level */
  level: PropTypes.oneOf(["1", "2", "3", "4", "5"]),
  /** Invert the loader colours when used on dark background */
  weight: PropTypes.oneOf(["medium", "light"]),
  /** Heading content */
  children: PropTypes.node.isRequired,
  /** className to add to heading */
  className: PropTypes.string
};

export default Heading;