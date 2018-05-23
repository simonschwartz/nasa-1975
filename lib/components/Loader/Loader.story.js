import React from "react";
import { text, select, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import Loader from "./";

const LoaderStory = withInfo({
  text:
    "Loading icons weren't around in 1975, but its really hard to build application UIs without a loading icon. This is a simple loader that users the NASA 1975 colour scheme."
})(() => {
  // Setup knob for setting loader size
  const labelSize = "size";
  const optionsSize = {
    lg: "lg",
    md: "md",
    sm: "sm"
  };
  const defaultValueSize = "md";
  const sizeValue = select(labelSize, optionsSize, defaultValueSize);

  // Setup knob for setting loader message
  const labelMessage = "message";
  const defaultValueMessage = "-loading-";
  const messageValue = text(labelMessage, defaultValueMessage);

  // Setup knob for setting inverted state
  const labelInverted = "inverted";
  const defaultValueInverted = false;
  const invertedValue = boolean(labelInverted, defaultValueInverted);

  return (
    <Loader size={sizeValue} message={messageValue} inverted={invertedValue} />
  );
});

export default LoaderStory;
