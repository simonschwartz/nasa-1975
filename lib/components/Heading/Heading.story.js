import React from "react";
import { text, select } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import Heading from "./";

const HeadingStory = withInfo({
  text:
    "Headings are set in Helvetica Medium. In certain situations Helvetica Bold may be an appropriate alternative."
})(() => {
  // Setup knob for setting heading size
  const labelSize = "size";
  const optionsSize = {
    xl: "xl",
    lg: "lg",
    md: "md",
    sm: "sm",
    xs: "xs"
  };
  const defaultValueSize = "md";
  const sizeValue = select(labelSize, optionsSize, defaultValueSize);

  // Setup knob for setting heading level
  const labelLevel = "level";
  const optionsLevel = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5"
  };
  const defaultValueLevel = "1";
  const levelValue = select(labelLevel, optionsLevel, defaultValueLevel);

  // Setup knob for setting heading level
  const labelWeight = "weight";
  const optionsWeight = {
    light: "light",
    medium: "medium",
    bold: "bold"
  };
  const defaultValueWeight = "bold";
  const weightValue = select(labelWeight, optionsWeight, defaultValueWeight);

  // Setup knob for setting header text
  const labelText = "text";
  const defaultValueText = "Heading value";
  const textValue = text(labelText, defaultValueText);

  return (
    <Heading size={sizeValue} level={levelValue} weight={weightValue}>
      {textValue}
    </Heading>
  );
});

export default HeadingStory;
