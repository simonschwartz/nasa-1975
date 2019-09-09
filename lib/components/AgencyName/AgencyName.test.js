import React from "react";
import ReactDOM from "react-dom";
import AgencyName from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AgencyName />, div);
});
