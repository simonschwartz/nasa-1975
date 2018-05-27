import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import AgencyName from "./";

it("renders correct markup with no props", () => {
  const tree = renderer.create(<AgencyName />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with stacked prop", () => {
  const tree = renderer.create(<AgencyName stacked />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with headingLevel prop", () => {
  const tree = renderer.create(<AgencyName headingLevel="3" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with size prop", () => {
  const tree = renderer.create(<AgencyName size="md" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with centerName prop", () => {
  const tree = renderer
    .create(<AgencyName centerName="John F. Kennedy Space Center" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with single line centerAddress prop", () => {
  const tree = renderer
    .create(<AgencyName centerAddress={["Washington. D.C. 20546"]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with multiple line centerAddress prop", () => {
  const tree = renderer
    .create(
      <AgencyName centerAddress={["Washington. D.C. 20546", "Second line"]} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct markup with multiple props", () => {
  const tree = renderer
    .create(
      <AgencyName
        stacked={true}
        headingLevel="4"
        size="sm"
        centerName="John F. Kennedy Space Center"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AgencyName />, div);
});
