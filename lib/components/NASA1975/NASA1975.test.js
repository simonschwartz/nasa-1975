import React from "react";
import ReactDOM from "react-dom";
import NASA1975 from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <NASA1975>
      <p>Test component</p>
    </NASA1975>,
    div
  );
});
