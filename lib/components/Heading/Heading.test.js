import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Heading from "./";

it("renders correct markup with no props", () => {
  const tree = renderer.create(<Heading>Test heading text</Heading>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with size prop", () => {
  const tree = renderer
    .create(<Heading size="md">Test heading text</Heading>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with level prop", () => {
  const tree = renderer
    .create(<Heading level="3">Test heading text</Heading>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with weight prop", () => {
  const tree = renderer
    .create(<Heading weight="light">Test heading text</Heading>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with multiple props", () => {
  const tree = renderer
    .create(
      <Heading size="xs" level="4" weight="light">
        Test heading text
      </Heading>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Heading>Test heading text</Heading>, div);
});
