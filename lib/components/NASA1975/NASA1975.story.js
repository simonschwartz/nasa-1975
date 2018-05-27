import React from "react";
import { withInfo } from "@storybook/addon-info";
import NASA1975 from "./";

const NASA1975Story = withInfo({
  text: "Wrap your application in NASA1975 to get base styling."
})(() =>
  <NASA1975>
    <p>your NASA 1975 application goes here...</p>
    <p>Wrap your application in NASA1975 to get base styling. This includes:</p>
    <ul>
      <li>paragraph styling</li>
      <li>list styling</li>
      <li>
        <a href="#">link styling</a>
      </li>
    </ul>
    <p>It will also set base font size required for NASA1975 components.</p>
  </NASA1975>
);

export default NASA1975Story;
