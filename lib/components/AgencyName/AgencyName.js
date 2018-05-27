import React from "react";
import Heading from "../Heading";
import PropTypes from "prop-types";
import "./AgencyName.css";

const AgencyName = ({
  stacked = false,
  headingLevel = "1",
  size = "lg",
  centerName = "",
  centerAddress,
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
        <Heading
          className="NASA1975-agency-name-center-name"
          level={headingLevel}
          size={size}
          weight="medium"
        >
          {centerName}
        </Heading>}
      {centerAddress &&
        <Heading
          className="NASA1975-agency-name-center-address"
          level={headingLevel}
          size={size}
          weight="light"
        >
          {centerAddress.length > 0 &&
            centerAddress.map((line, index) => {
              return (
                <span key={index}>
                  {line}
                  <br />
                </span>
              );
            })}
        </Heading>}
    </div>
  );
};

AgencyName.propTypes = {
  /** Stacked state of Agency name */
  stacked: PropTypes.bool,
  /** HTML heading level */
  headingLevel: PropTypes.oneOf(["1", "2", "3", "4", "5"]),
  /** Size of the heading */
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  /** Center name eg "John F. Kennedy Space Center" */
  centerName: PropTypes.string,
  /** Center address eg "Washington. D.C." */
  centerAddress: PropTypes.arrayOf(PropTypes.string),
  /** className to add to heading */
  className: PropTypes.string
};

export default AgencyName;
