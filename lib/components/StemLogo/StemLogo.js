/** @jsx jsx */
import React from "react";
import { jsx, css } from '@emotion/core'
import PropTypes from "prop-types";
import Typography from "../Typography";
import WormLogo from "../WormLogo";
import { NASA_DARK, NASA_LIGHT, NASA_RED } from '../../tokens';

const wrapperStyle = css`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
`;

const logoStyle = size => {
  let logoWidth;
  switch(size) {
    case 'lg':
      logoWidth = "300px";
      break;
    case 'md':
      logoWidth = "245px";
      break;
    case 'sm':
      logoWidth = "190px";
      break;
    default:
      logoWidth = "245px";
  };

  return css`
    height: auto;
    position: relative;
    bottom: -1px;
    flex-shrink: 0;
    margin: 0 5px 0 0;
    width: ${logoWidth};
  `;
};

const fontStyle = size => {
  let fontSize;
  switch(size) {
    case 'lg':
      fontSize = "7rem";
      break;
    case 'md':
      fontSize = "5.5rem";
      break;
    case 'sm':
      fontSize = "4.4rem";
      break;
    default:
      fontSize = "5.5rem";
  };

  return css`
    font-size: ${fontSize};
  `;
}

/**
 * The stem word allows the logotype to become both the major identification element and part of the publication title. 
 * 
 * This technique is used only on permanent, regularly published documents,  and requires advice from the NASA Graphics Coordinator at Headquarters. 
 * 
 * `import { StemLogo } from "nasa-1975";`
 */
const StemLogo = ({
  size = "lg",
  theme = "red",
  headingLevel = "1",
  title,
  ...restProps,
}) => {
  const HeadingTag = `h${headingLevel}`;
  const typographyTheme = theme === "red" ? "dark" : theme;
  const logoColor = theme => {
    if(theme === "light") return NASA_LIGHT;
    if(theme === "red") return NASA_RED;
    if(theme === "dark") return NASA_DARK;
    return NASA_DARK;
  }
  return (
    <section
    css={wrapperStyle}
      {...restProps}
    >
      <WormLogo css={logoStyle(size)} color={logoColor(theme)} />
      <Typography tag={HeadingTag} weight="light" theme={typographyTheme} css={fontStyle(size)}>
        {title}
      </Typography>
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
};

export default StemLogo;
