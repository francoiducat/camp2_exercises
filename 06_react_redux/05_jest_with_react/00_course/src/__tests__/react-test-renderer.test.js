import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import renderer from "react-test-renderer";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});


test("everything looks the same", () => {
  const component = renderer.create(<App />);

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test("everything looks the same with props", () => {
  const component = renderer.create(<App startValue={1} />);

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
