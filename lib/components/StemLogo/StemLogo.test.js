import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import StemLogo from "./";

it("renders correct markup with no optional props", () => {
  const tree = renderer.create(<StemLogo title="Test Title" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with headingLevel prop", () => {
  const tree = renderer
    .create(<StemLogo title="Test Title" headingLevel="3" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with inverted prop", () => {
  const tree = renderer
    .create(<StemLogo title="Test Title" inverted />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with size prop", () => {
  const tree = renderer
    .create(<StemLogo title="Test Title" size="sm" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with multiple props", () => {
  const tree = renderer
    .create(
      <StemLogo
        title="Test Title"
        headingLevel="2"
        size="sm"
        inverted={false}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<StemLogo title="Test Title" />, div);
});
