import React from "react";
import { text } from "@storybook/addon-knobs";
import WormLogo from "./";

const WormLogoStory = () =>
  <WormLogo color={text("color", "#000")} width={text("width", "400px")} />;

export default WormLogoStory;
