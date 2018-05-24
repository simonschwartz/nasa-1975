import React from "react";
import Heading from "../Heading";
import PropTypes from "prop-types";
import "./AgencyName.css";

const AgencyName = ({
  stacked = false,
  headingLevel = "1",
  size = "lg",
  centerName = "",
  className = "",
  ...attributeOptions
}) => {
  const headingClass = stacked
    ? "NASA1975-agency-name NASA1975-agency-name--stacked"
    : "NASA1975-agency-name NASA1975-agency-name--inline";

  return (
    <div className={className} {...attributeOptions}>
      <Heading
        level={headingLevel}
        size={size}
        weight="light"
        className={headingClass}
      >
        <span className="NASA1975-agency-name-N">National</span>{" "}
        <span className="NASA1975-agency-name-Aa">Aeronautics and</span>{" "}
        <span className="NASA1975-agency-name-SA">
          <span className="NASA1975-agency-name-S">Space</span>{" "}
          <span className="NASA1975-agency-name-A">Administration</span>
        </span>
      </Heading>
      {centerName &&
        <Heading level={headingLevel} size={size} weight="medium">
          {centerName}
        </Heading>}
    </div>
  );
};

AgencyName.propTypes = {
  /** Size of the heading */
  stacked: PropTypes.bool,
  /** HTML heading level */
  headingLevel: PropTypes.oneOf(["1", "2", "3", "4", "5"]),
  /** Size of the heading */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  /** Center name eg "John F. Kennedy Space Center" */
  centerName: PropTypes.string,
  /** className to add to heading */
  className: PropTypes.string
};

export default AgencyName;
