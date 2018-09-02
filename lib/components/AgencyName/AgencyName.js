import React from 'react';
import PropTypes from 'prop-types';
import { cx, css } from 'emotion';
import Heading from '../Heading';

const headingClass = css`
  line-height: 1.1;
`;

const nameAcronymInline = css`
  display: block;

  @media (min-width: 550px) {
    display: inline-block;
  }
`;

const nameAcronymStacked = css`
  display: block;
`;

const AgencyName = ({
  stacked = false,
  headingLevel = '1',
  size = 'lg',
  centerName = '',
  centerAddress,
  className = '',
  ...attributeOptions
}) => {
  const acronymClass = stacked ? nameAcronymStacked : nameAcronymInline;
  return (
    <div className={className} {...attributeOptions}>
      <Heading level={headingLevel} size={size} weight="light" className={headingClass}>
        <span className={acronymClass}>National</span>{' '}
        <span className={cx(acronymClass, css`white-space: nowrap;`)}>Aeronautics and</span>{' '}
        <span className={css`display: block`}>
          <span className={acronymClass}>Space</span> <span className={acronymClass}>Administration</span>
        </span>
      </Heading>
      {centerName &&
        <Heading className={cx(headingClass, css`margin-bottom: 0`)} level={headingLevel} size={size} weight="medium">
          {centerName}
        </Heading>}
      {centerAddress &&
        <Heading className={headingClass} level={headingLevel} size={size} weight="light">
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
  headingLevel: PropTypes.oneOf(['1', '2', '3', '4', '5']),
  /** Size of the heading */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /** Center name eg "John F. Kennedy Space Center" */
  centerName: PropTypes.string,
  /** Center address eg "Washington. D.C." */
  centerAddress: PropTypes.arrayOf(PropTypes.string),
  /** className to add to heading */
  className: PropTypes.string
};

export default AgencyName;
