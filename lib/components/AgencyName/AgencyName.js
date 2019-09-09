/** @jsx jsx */
import React from "react";
import { jsx, css } from '@emotion/core'
import Heading from "../Heading";
import PropTypes from "prop-types";
import { 
  FONT_FAMILY_DEFAULT,
  FONT_COLOR_DEFAULT,
  FONT_WEIGHT_LIGHT,
  FONT_WEIGHT_HEAVY,
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
} from '../Colors';

const block = css`
  display: block;
`;

const noWrap = css`
  white-space: nowrap;
`;

const agencyHeading = size => {
  let fontSize;
  let lineHeight;

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
  }

  return css`
    font-family: ${FONT_FAMILY_DEFAULT};
    font-weight: ${FONT_WEIGHT_LIGHT};
    margin: 0 0 1rem 0;
    font-size: ${fontSize};
    line-height: ${lineHeight};
  `;
}

// margin-top should change dependant on size
const centerHeading = size => {
  let marginTop;

  switch(size) {
    case 'xl':
      marginTop = "0.85rem";
      break;
    case 'lg':
      marginTop = "0.8rem";
      break;
    case 'md':
      marginTop = "0.75rem";
      break;
    case 'sm':
      marginTop = "0.7rem";
      break;
    case 'xs':
      marginTop = "0.55rem";
      break;
    default:
      marginTop = "0.5rem";
  }
  return css`
    display: block;
    font-family: ${FONT_FAMILY_DEFAULT};
    font-weight: ${FONT_WEIGHT_HEAVY};
    margin-top: 0.75rem;
  `;
}

/**
 * The full agency name (National Aeronautics and Space Administration) can be displayed stacked or inline.
 * 
 * To identify any of the NASA centers, the full center name is shown in conjunction with the full agency name.
 * 
 * `import { AgencyName } from "nasa-1975";`
 */
const AgencyName = ({
  stacked = false,
  headingLevel = "1",
  size = 'lg',
  centerName,
  ...restProps
}) => {
  const HeadingTag = `h${headingLevel}`;

  const InlineName = () => (
    <span>
      <span css={block}>National <span css={noWrap}>Aeronautics and</span></span>
      <span css={block}>Space Administration</span>
    </span>
  );

  const StackedName = () => (
    <span>
      <span css={block}>National</span>
      <span css={block}>Aeronautics and</span>
      <span css={block}>Space</span>
      <span css={block}>Administration</span>
    </span>
  );

  return (
    <HeadingTag css={agencyHeading(size)} {...restProps}>
      {stacked ? <StackedName /> : <InlineName />}
      <span css={centerHeading}>{centerName}</span>
    </HeadingTag>
    
  )
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
};

export default AgencyName;
