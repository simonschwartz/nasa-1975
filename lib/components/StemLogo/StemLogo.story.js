import React from "react";
import { text, select, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import StemLogo from "./";

const StemLogoStory = withInfo({
  text:
    "The stem-word technique is used only on permanent, regularly published documents."
})(() => {
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

  // Setup knob for setting inverted state
  const labelInverted = "inverted";
  const defaultValueInverted = false;
  const invertedValue = boolean(labelInverted, defaultValueInverted);

  // Setup knob for setting title text
  const labelTitle = "title";
  const defaultValueTitle = "News";
  const titleValue = text(labelTitle, defaultValueTitle);

  return (
    <StemLogo
      headingLevel={headingLevelValue}
      size={sizeValue}
      inverted={invertedValue}
      title={titleValue}
    />
  );
});

export default StemLogoStory;
