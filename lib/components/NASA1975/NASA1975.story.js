import React from "react";
import { withInfo } from "@storybook/addon-info";
import NASA1975 from "./";

const NASA1975Story = withInfo({
  text: "Wrap your application in NASA1975 to get base styling"
})(() =>
  <NASA1975>
    <p>your NASA 1975 application goes here...</p>
  </NASA1975>
);

export default NASA1975Story;
