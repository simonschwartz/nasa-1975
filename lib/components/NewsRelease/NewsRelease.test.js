import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import NewsRelease from "./";

it("renders correct markup with no props", () => {
  const tree = renderer
    .create(
      <NewsRelease authorName="Neil Armstrong" title="Test title">
        <p>Test article content</p>
      </NewsRelease>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with authorLocation prop", () => {
  const tree = renderer
    .create(
      <NewsRelease
        authorName="Neil Armstrong"
        title="Test title"
        authorLocation="Houston, Texas"
      >
        <p>Test article content</p>
      </NewsRelease>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with authorPhone prop", () => {
  const tree = renderer
    .create(
      <NewsRelease
        authorName="Neil Armstrong"
        title="Test title"
        authorPhone="0752/1234-087"
      >
        <p>Test article content</p>
      </NewsRelease>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with centerName prop", () => {
  const tree = renderer
    .create(
      <NewsRelease
        authorName="Neil Armstrong"
        title="Test title"
        centerName="Mission Control"
      >
        <p>Test article content</p>
      </NewsRelease>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with centerAddress prop", () => {
  const tree = renderer
    .create(
      <NewsRelease
        authorName="Neil Armstrong"
        title="Test title"
        centerAddress={["Washington. D.C. 20546 ", "AC 202 755-8370"]}
      >
        <p>Test article content</p>
      </NewsRelease>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with multiple props", () => {
  const tree = renderer
    .create(
      <NewsRelease
        title="Skylab puts out welcome mat for comet"
        authorName="John Smith"
        authorLocation="Goddard Space Flight Center"
        authorPhone="301/725-1234"
        centerName="Goddard space center"
        centerAddress={["Washington. D.C. 20546 ", "AC 202 755-8370"]}
        style={{
          maxWidth: "700px",
          margin: "auto"
        }}
      >
        <p>Test article content</p>
      </NewsRelease>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <NewsRelease authorName="Neil Armstrong" title="Test title">
      <p>Test article content</p>
    </NewsRelease>,
    div
  );
});
