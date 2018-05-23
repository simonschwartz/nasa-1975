import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Loader from "./";

it("renders correct markup with no props", () => {
  const tree = renderer.create(<Loader />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with message prop", () => {
  const tree = renderer.create(<Loader message="-loading message-" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with inverted prop", () => {
  const tree = renderer.create(<Loader inverted />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup for lg size prop", () => {
  const tree = renderer.create(<Loader size="lg" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup for md size prop", () => {
  const tree = renderer.create(<Loader size="md" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup for sm size prop", () => {
  const tree = renderer.create(<Loader size="sm" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Loader />, div);
});
