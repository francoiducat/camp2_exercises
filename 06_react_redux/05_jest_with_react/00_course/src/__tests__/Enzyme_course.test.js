import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

beforeAll(() => {
  configure({ adapter: new Adapter() });
})

test("shows a counter starting at 0", () => {
  const result = shallow(<App />);
  expect(result.find("span").text()).toBe("0");
});


test("the counter updates",() => {
    const result = shallow(<App />);

    result.find("button").at(1).simulate("click");

    expect(result.find("#counter").text()).toBe("1");
});


test("the counter updates downward",() => {
    const result = shallow(<App />);

    result.find("button").first().simulate("click");

    expect(result.find("#counter").text()).toBe("-1");
});
