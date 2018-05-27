import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import ArticleAuthor from "./";

it("renders correct markup with no optional props", () => {
  const tree = renderer
    .create(<ArticleAuthor name="Test author name" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with location prop", () => {
  const tree = renderer
    .create(
      <ArticleAuthor
        name="Test author name"
        location="Goddard Space Flight Center"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with phone prop", () => {
  const tree = renderer
    .create(<ArticleAuthor name="Test author name" phone="301/725-1234" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with multiple props", () => {
  const tree = renderer
    .create(
      <ArticleAuthor
        name="Test author name"
        location="Goddard Space Flight Center"
        phone="301/725-1234"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ArticleAuthor name="Test author name" />, div);
});
