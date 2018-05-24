import React from "react";
import { text, select, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import AgencyName from "./";

const AgencyNameStory = withInfo({
  text:
    "The full agency name (National Aeronautics and Space Administration) can be displayed stacked or inline (defaults to stacked on small screens). To identify any of the NASA centers, the full center name is shown in conjunction with the full agency name."
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

  // Setup knob for setting center name text
  const labelCenterName = "centerName";
  const defaultValueCenterName = "";
  const centerNameValue = text(labelCenterName, defaultValueCenterName);

  return (
    <AgencyName
      stacked={stackedValue}
      headingLevel={headingLevelValue}
      size={sizeValue}
      centerName={centerNameValue}
    />
  );
});

export default AgencyNameStory;
