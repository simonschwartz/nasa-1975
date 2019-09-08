import React from "react";
import { text } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import WormLogo from ".";

const WormLogoStory = withInfo({
  text:
    "This logotype is the central element in NASA's visual communications system."
})(() =>
  <WormLogo color={text("color", "#e30613")} width={text("width", "400px")} />
);

export const withWhiteBackground = withInfo({
  text:
    "This logotype is the central element in NASA's visual communications system."
})(() =>
  <WormLogo color={text("color", "#e30613")} width={text("width", "400px")} />
);

export default WormLogoStory;
