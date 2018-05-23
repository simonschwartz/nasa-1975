import React from "react";
import PropTypes from "prop-types";
import "./NASA1975.css";

const NASA1975 = ({ children }) =>
  <div className="NASA1975">
    {children}
  </div>;

NASA1975.propTypes = {
  /** Application content */
  children: PropTypes.node.isRequired
};

export default NASA1975;
