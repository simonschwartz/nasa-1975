import React from "react";
import PropTypes from "prop-types";
import "./Loader.css";

const Loader = ({
  size = "md",
  className = "",
  message = "",
  inverted = false,
  ...attributeOptions
}) => {
  const invertedClassName = inverted
    ? "NASA1975-loader-container--inverted"
    : "";
  return (
    <div
      className={`NASA1975-loader-container NASA1975-loader-container--${size} ${invertedClassName} ${className}`}
      {...attributeOptions}
    >
      <div className={`NASA1975-loader-outer`}>
        <div className={`NASA1975-loader-inner`} />
      </div>
      {message &&
        <span className={`NASA1975-loader-message`}>
          {message}
        </span>}
    </div>
  );
};

Loader.propTypes = {
  /** Size of the loader */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  /** Optional text to display below loader */
  message: PropTypes.string,
  /** Invert the loader colours when used on dark background */
  inverted: PropTypes.bool,
  /** className to add to loader container element */
  className: PropTypes.string
};

export default Loader;
