import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import LogoType from "./";

it("renders correct markup with no props", () => {
  const tree = renderer.create(<LogoType />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with stacked prop", () => {
  const tree = renderer.create(<LogoType stacked />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with headingLevel prop", () => {
  const tree = renderer.create(<LogoType headingLevel="3" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with size prop", () => {
  const tree = renderer.create(<LogoType size="md" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with theme prop", () => {
  const tree = renderer.create(<LogoType theme="light" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with centerName prop", () => {
  const tree = renderer
    .create(<LogoType centerName="John F. Kennedy Space Center" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with multiple props", () => {
  const tree = renderer
    .create(
      <LogoType
        stacked={true}
        headingLevel="4"
        size="sm"
        theme="dark"
        centerName="John F. Kennedy Space Center"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LogoType />, div);
});
