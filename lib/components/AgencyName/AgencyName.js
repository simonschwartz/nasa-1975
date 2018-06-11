import React from 'react';
import Heading from '../Heading';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import styled from 'react-emotion';
import './AgencyName.css';

const WordBreak = styled('span')`
  display: block;
  @media (min-width: 550px) {
    display: ${props => (props.stacked ? 'block' : 'inline-block')}
  }
`;

const classx = css`color: blue`;

const AgencyName = ({
  stacked = false,
  headingLevel = '1',
  size = 'lg',
  centerName = '',
  centerAddress,
  className = '',
  ...attributeOptions
}) => {
  return (
    <div className={className} {...attributeOptions}>
      <Heading level={headingLevel} size={size} weight="light" className={classx}>
        <WordBreak stacked={stacked}>National</WordBreak> <WordBreak stacked={stacked}>Aeronautics and</WordBreak>{' '}
        <WordBreak>
          <WordBreak stacked={stacked}>Space</WordBreak> <WordBreak stacked={stacked}>Administration</WordBreak>
        </WordBreak>
      </Heading>
      {centerName &&
        <Heading className="NASA1975-agency-name-center-name" level={headingLevel} size={size} weight="medium">
          {centerName}
        </Heading>}
      {centerAddress &&
        <Heading className="NASA1975-agency-name-center-address" level={headingLevel} size={size} weight="light">
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
