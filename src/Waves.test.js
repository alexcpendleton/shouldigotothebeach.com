import React from 'react';
import ReactDOM from 'react-dom';
import Waves from './Waves';
import { shallow } from 'enzyme';

it('renders without crashing with no props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Waves />, div);
});

it('should render a container matching #waves', () => {
  const component = shallow(<Waves />);
  expect(component.first().is("#waves"))
    .toEqual(true);
});

it('should render props.description in #wave-description', () => {
  const description = "5-10 foot waves"
  const component = shallow(<Waves description={description} />);
  expect(component.find("#wave-description").text())
    .toEqual(description);
});
it('should render an empty #wave-description when props.description is omitted', () => {
  const component = shallow(<Waves />);
  expect(component.find("#wave-description").text())
    .toEqual("");
});