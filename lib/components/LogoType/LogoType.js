import React from "react";
import PropTypes from "prop-types";
import WormLogo from "../WormLogo";
import AgencyName from "../AgencyName";
import "./LogoType.css";

const LogoType = ({
  size = "lg",
  theme = "red",
  stacked = false,
  headingLevel = "1",
  centerName = "",
  className = "",
  ...attributeOptions
}) => {
  return (
    <section
      className={`NASA1975-logo-type NASA1975-logo-type--${size} NASA1975-logo-type--${theme}`}
    >
      <WormLogo className="NASA1975-logo-type-logo" />
      <AgencyName
        size={size}
        stacked={stacked}
        className="NASA1975-logo-type-heading"
        centerName={centerName}
      />
    </section>
  );
};

LogoType.propTypes = {
  /** Stacked state of Agency name */
  stacked: PropTypes.bool,
  /** HTML heading level */
  headingLevel: PropTypes.oneOf(["1", "2", "3", "4", "5"]),
  /** Colour theme of Logo type */
  theme: PropTypes.oneOf(["dark", "light", "red"]),
  /** Size of the heading */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  /** Center name eg "John F. Kennedy Space Center" */
  centerName: PropTypes.string,
  /** className to add to heading */
  className: PropTypes.string
};

export default LogoType;
