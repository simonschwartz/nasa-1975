import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import LogoType from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LogoType />, div);
});
