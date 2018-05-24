import React from "react";
import { text, select, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import LogoType from "./";

const LogoTypeStory = withInfo({
  text:
    "The NASA logotype is shown in conjunction with the full agency name. The size of the agency name should relate to the size of the logo."
})(() => {
  // Setup knob for setting stacked state
  const labelStacked = "stacked";
  const defaultValueStacked = false;
  const stackedValue = boolean(labelStacked, defaultValueStacked);

  // Setup knob for setting heading level
  const headingLevelLevel = "headingLevel";
  const optionsHeadingLevel = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5"
  };
  const defaultValueHeadingLevel = "1";
  const headingLevelValue = select(
    headingLevelLevel,
    optionsHeadingLevel,
    defaultValueHeadingLevel
  );

  // Setup knob for setting heading size
  const labelSize = "size";
  const optionsSize = {
    lg: "lg",
    md: "md",
    sm: "sm"
  };
  const defaultValueSize = "lg";
  const sizeValue = select(labelSize, optionsSize, defaultValueSize);

  // Setup knob for setting theme
  const labelTheme = "theme";
  const optionsTheme = {
    red: "red",
    dark: "dark",
    light: "light"
  };
  const defaultValueTheme = "red";
  const themeValue = select(labelTheme, optionsTheme, defaultValueTheme);

  // Setup knob for setting center name text
  const labelCenterName = "centerName";
  const defaultValueCenterName = "";
  const centerNameValue = text(labelCenterName, defaultValueCenterName);

  return (
    <LogoType
      stacked={stackedValue}
      headingLevel={headingLevelValue}
      size={sizeValue}
      centerName={centerNameValue}
      theme={themeValue}
    />
  );
});

export default LogoTypeStory;
