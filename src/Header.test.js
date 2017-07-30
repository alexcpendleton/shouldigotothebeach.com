import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});

it('renders props.proclamation in #proclamation', ()=> {
  const proclamation = "Some test text";
  const component = shallow(<Header proclamation={proclamation} />);
  const p = component.find("#proclamation");
  expect(p.text())
    .toEqual(proclamation);
});

it(`should render 'Should I go to the beach?' in h2`, () => {
  const component = shallow(<Header />);
  expect(component.find("h2").text())
    .toEqual("Should I go to the beach?");
});


it('should render props.beach.name in h4', () => {
  const beach = {name:"Crystal Cove"}
  const component = shallow(<Header beach={beach} />);
  expect(component.find("h4").text())
    .toEqual(beach.name);
});
it('should render empty in h4 if props.beach is undefined', () => {
  const component = shallow(<Header  />);
  expect(component.find("h4").text())
    .toEqual("");
});

