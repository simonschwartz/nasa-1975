/** @jsx jsx */
import React from "react";
import { jsx, css } from '@emotion/core'
import PropTypes from "prop-types";
import WormLogo from "../WormLogo";
import AgencyName from "../AgencyName";
import { 
  FONT_FAMILY_DEFAULT,
  FONT_WEIGHT_LIGHT,
  FONT_WEIGHT_MEDIUM,
  FONT_COLOR_LIGHT,
  FONT_COLOR_DARK,
  FONT_SIZE_XL,
  LINE_HEIGHT_XL,
  FONT_SIZE_LG,
  LINE_HEIGHT_LG,
  FONT_SIZE_MD,
  LINE_HEIGHT_MD,
  FONT_SIZE_SM,
  LINE_HEIGHT_SM,
  FONT_SIZE_XS,
  LINE_HEIGHT_XS,
   } from '../../tokens';

const textStyle = (theme, weight, size) => {
  let fontColor;
  let fontWeight;
  let fontSize;
  let lineHeight;

  if(theme === "light") {
    fontColor = FONT_COLOR_LIGHT
  } else {
    fontColor = FONT_COLOR_DARK
  }

  if(weight === "light") {
    fontWeight = FONT_WEIGHT_LIGHT
  } else {
    fontWeight = FONT_WEIGHT_MEDIUM
  }

  switch(size) {
    case 'xl':
      fontSize = FONT_SIZE_XL;
      lineHeight = LINE_HEIGHT_XL;
      break;
    case 'lg':
      fontSize = FONT_SIZE_LG;
      lineHeight = LINE_HEIGHT_LG;
      break;
    case 'md':
      fontSize = FONT_SIZE_MD;
      lineHeight = LINE_HEIGHT_MD;
      break;
    case 'sm':
      fontSize = FONT_SIZE_SM;
      lineHeight = LINE_HEIGHT_SM;
      break;
    case 'xs':
      fontSize = FONT_SIZE_XS;
      lineHeight = LINE_HEIGHT_XS;
      break;
    default:
      fontSize = FONT_SIZE_MD;
      lineHeight = LINE_HEIGHT_MD;
  };

  return css`
    color: ${fontColor};
    font-family: ${FONT_FAMILY_DEFAULT};
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    line-height: ${lineHeight};
    margin: 0;
  `;
};

/**
 * To identify the agency, as a total entity, the NASA logotype is shown in conjunction with the full agency name (National Aeronautics and Space Administration) as shown below.
 *
 * The size of the agency name should relate to the size of the logotype as indicated.
 * 
 * `import { Typography } from "nasa-1975";`
 */
const Typography = ({
  size = "md",
  theme = "dark",
  weight = "light",
  tag,
  children,
  ...restProps
}) => {
  const Tag = tag.toLowerCase();

  return (
    <Tag css={textStyle(theme, weight, size)} {...restProps}>{children}</Tag>
  );
};

Typography.propTypes = {
  /** Size of the text */
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  /** Colour theme of text */
  theme: PropTypes.oneOf(["dark", "light"]),
  /** Weight of the text */
  weight: PropTypes.oneOf(["medium", "light"]),
  /** Valid HTML tag to wrap content */
  tag: PropTypes.string,
  /** Text content */
  children: PropTypes.node,
};

export default Typography;
