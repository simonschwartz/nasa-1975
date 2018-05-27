import React from "react";
import PropTypes from "prop-types";
import WormLogo from "../WormLogo";
import Heading from "../Heading";
import "./StemLogo.css";

const StemLogo = ({
  size = "lg",
  theme = "red",
  headingLevel = "1",
  title,
  className = "",
  ...attributeOptions
}) => {
  return (
    <section
      className={`NASA1975-stem-logo NASA1975-stem-logo--${size} NASA1975-stem-logo--${theme} ${className}`}
      {...attributeOptions}
    >
      <WormLogo className="NASA1975-stem-logo-container" />
      <Heading
        level={headingLevel}
        size={size}
        weight="light"
        className={`NASA1975-stem-logo-heading`}
      >
        {title}
      </Heading>
    </section>
  );
};

StemLogo.propTypes = {
  /** HTML heading level */
  headingLevel: PropTypes.oneOf(["1", "2", "3", "4", "5"]),
  /** Colour theme of StemLogo */
  theme: PropTypes.oneOf(["dark", "light", "red"]),
  /** Size of the heading */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  /** Stem Title */
  title: PropTypes.string.isRequired,
  /** className to add to heading */
  className: PropTypes.string
};

export default StemLogo;
