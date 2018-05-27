import React from "react";
import PropTypes from "prop-types";
import StemLogo from "../StemLogo";
import AgencyName from "../AgencyName";
import ArticleAuthor from "../ArticleAuthor";
import Heading from "../Heading";
import NASA1975 from "../NASA1975";
import "./NewsRelease.css";

const NewsRelease = ({
  authorName,
  authorLocation = "",
  authorPhone = "",
  centerName = "",
  centerAddress = [],
  className = "",
  title,
  children,
  ...attributeOptions
}) =>
  <article
    className={`NASA1975-news-release ${className}`}
    {...attributeOptions}
  >
    <header>
      <StemLogo title="News" size="lg" headingLevel="1" />
      <AgencyName
        className="NASA1975-news-release-header"
        headingLevel="2"
        size="xs"
        centerName={centerName}
        centerAddress={centerAddress}
      />
      <ArticleAuthor
        name={authorName}
        location={authorLocation}
        phone={authorPhone}
      />
      <Heading level="1">
        {title}
      </Heading>
    </header>
    <NASA1975>
      {children}
    </NASA1975>
  </article>;

NewsRelease.propTypes = {
  /** Name of article author */
  authorName: PropTypes.string.isRequired,
  /** Location of article author */
  authorLocation: PropTypes.string,
  /** Phone contact of article author */
  authorPhone: PropTypes.string,
  /** Center name eg "John F. Kennedy Space Center" */
  centerName: PropTypes.string,
  /** Center address eg "Washington. D.C." */
  centerAddress: PropTypes.arrayOf(PropTypes.string),
  /** News release title */
  title: PropTypes.string.isRequired,
  /** News release content */
  children: PropTypes.node.isRequired,
  /** className to add to heading */
  className: PropTypes.string
};

export default NewsRelease;
