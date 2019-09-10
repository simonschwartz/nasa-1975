/** @jsx jsx */
import React from "react";
import { jsx, css } from '@emotion/core'
import Typography from "../Typography";
import PropTypes from "prop-types";

const block = css`
  display: block;
`;

const noWrap = css`
  white-space: nowrap;
`;

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
    margin-top: ${marginTop};
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
  theme = "dark",
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

  const commonTypographyProps = {
    size,
    theme: theme === "red" ? "dark" : theme
  };

  return (
    <Typography tag={HeadingTag} weight="light" {...commonTypographyProps} {...restProps}>
      {stacked ? <StackedName /> : <InlineName />}
      <Typography tag="span" weight="medium" css={centerHeading(size)} {...commonTypographyProps}>{centerName}</Typography>
    </Typography>
    
  )
};

AgencyName.propTypes = {
  /** Stacked state of Agency name */
  stacked: PropTypes.bool,
  /** HTML heading level */
  headingLevel: PropTypes.oneOf(["1", "2", "3", "4", "5"]),
  /** Size of the heading */
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  /** Colour theme of agency name */
  theme: PropTypes.oneOf(["dark", "light", "red"]),
  /** Center name eg "John F. Kennedy Space Center" */
  centerName: PropTypes.string,
};

export default AgencyName;
