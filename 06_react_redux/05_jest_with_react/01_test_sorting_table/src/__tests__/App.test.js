import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import renderer from "react-test-renderer";
import App from '../App';



const products =
[
  { "decathlon_id": 8329121, "title": "COUTEAU A PALOURDES", "price": 4.99 },
  { "decathlon_id": 8247793, "title": "PALMES WADERS", "price": 24.99 }
]

beforeAll(() => {
  configure({ adapter: new Adapter() });
})

test('The table is sorted by price', () => {
  const component = shallow(<App lines={products}/>);

  //prices before sorting
  const oldPrices = component.find("td.price").map(node => node.text());
  const floatOldPrices = oldPrices.map(pri => parseFloat(pri));

  // click on sorting button for prices
  component.find("th.priceHeader").simulate("click")

  // prices after sorting
  const newPrices = component.find("td.price").map(node => node.text());
  const floatNewPrices = newPrices.map(pri => parseFloat(pri))

  // test
  expect(floatNewPrices).toEqual(floatOldPrices.sort(function(a, b) { return a - b; }));
});



it("filters by PRice when third TH is clicked", () => {
  const result = shallow(<App lines={products} />);
  result.find("th").at(2).simulate("click");
  expect(result.state().sortedBy).toBe("price");

});


it("shows a table with header ONE called ID", () => {
  const result = shallow(<App />);
  expect(result.find("th").at(0).text()).toBe("ID");
  expect(result.find("th").at(1).text()).toBe("Title");
  expect(result.find("th").at(2).text()).toBe("Price");
});



SNAPSHOT TESTIN

test("everything looks the same", () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("everything looks the same with props", () => {
  const component = renderer.create(<App lines={ [{"decathlon_id": 8282689, "title": "Corne chasse 14cm", "price": 9.99}] } />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
