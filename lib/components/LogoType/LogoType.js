/** @jsx jsx */
import React from "react";
import { jsx, css } from '@emotion/core'
import PropTypes from "prop-types";
import WormLogo from "../WormLogo";
import AgencyName from "../AgencyName";
import { NASA_DARK, NASA_LIGHT, NASA_RED } from '../../tokens';

const logoStyle = size => {
  let maxWidth;
  switch(size) {
    case 'lg':
      maxWidth = '300px';
      break;
    case 'md':
      maxWidth = '270px';
      break;
    case 'sm':
      maxWidth = '190px';
      break;
    default:
      maxWidth = '270px';
  }

  return css`
    max-width: ${maxWidth};
    height: auto;
  `;
};

/**
 * To identify the agency, as a total entity, the NASA logotype is shown in conjunction with the full agency name (National Aeronautics and Space Administration) as shown below.
 *
 * The size of the agency name should relate to the size of the logotype as indicated.
 * 
 * `import { LogoType } from "nasa-1975";`
 */
const LogoType = ({
  size = "lg",
  theme = "dark",
  stacked = false,
  headingLevel = "1",
  centerName,
  ...restProps
}) => {
  let logoColor;
  switch(theme) {
    case 'red':
      logoColor = NASA_RED;
      break;
    case 'dark':
      logoColor = NASA_DARK;
      break;
    case 'light':
      logoColor = NASA_LIGHT;
      break;
    default:
      logoColor = NASA_DARK;
  }

  return (
    <section
      {...restProps}
    >
      <WormLogo color={logoColor} css={logoStyle(size)} />
      <AgencyName
        size={size}
        stacked={stacked}
        theme={theme}
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
};

export default LogoType;
