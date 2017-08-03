import React from 'react';
import ReactDOM from 'react-dom';
import Crowds from './Crowds';
import { shallow } from 'enzyme';

it('renders without crashing with no props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Crowds />, div);
});

it('should render a container matching #crowds', () => {
  const component = shallow(<Crowds />);
  expect(component.first().is("#crowds"))
    .toEqual(true);
});

it('should render props.description in #crowd-description', () => {
  const description = "5-10 foot crowds"
  const component = shallow(<Crowds description={description} />);
  expect(component.find("#crowd-description").text())
    .toEqual(description);
});
it('should render an empty #crowd-description when props.description is omitted', () => {
  const component = shallow(<Crowds />);
  expect(component.find("#crowd-description").text())
    .toEqual("");
});