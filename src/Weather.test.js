import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './Weather';
import { shallow } from 'enzyme';

it('renders without crashing with no props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Weather />, div);
});

it('should render a container matching #weather', () => {
  const component = shallow(<Weather />);
  expect(component.first().is("#weather"))
    .toEqual(true);
});

it('should render an image using model data', () => {
  const weather = {
    icon: {
      uri:"https://weather_sun.png",
      description:"70° and sunny",
    }
  };
  const component = shallow(<Weather icon={weather.icon}/>);
  const props = component.find("#weather-icon").props();
  expect(props.src).toEqual(weather.icon.uri);
  expect(props.alt).toEqual(weather.icon.description);
  expect(props.title).toEqual("Weather Description Icon");
});

it('should render props.temperature in #temperature', () => {
  const temperature = "70";
  const component = shallow(<Weather temperature={temperature}/>);
  const element = component.find("#weather-temperature");
  expect(element.text()).toEqual(temperature);
});