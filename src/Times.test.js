import React from 'react';
import ReactDOM from 'react-dom';
import Times from './Times';
import { shallow } from 'enzyme';

it('renders without crashing with no props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Times />, div);
});

describe('tides', () => {
  describe('high-tide', ()=> {
    it('renders tide.high value in #high-tide-value when passed in props', ()=> {
      const tide ={high:"@4:30pm"};
      const component = shallow(<Times tide={tide} />);
      const p = component.find("#high-tide-value");
      expect(p.text())
        .toEqual(tide.high);
    });
    it('renders an empty tide.high in #high-tide-value when not passed in props', ()=> {
      const component = shallow(<Times />);
      const p = component.find("#high-tide-value");
      expect(p.text())
        .toEqual("");
    });
  });  
  describe('low-tide', ()=> {
    it('renders tide.low value in #low-tide-value when passed in props', ()=> {
      const tide ={low:"@7:30am"};
      const component = shallow(<Times tide={tide} />);
      const p = component.find("#low-tide-value");
      expect(p.text())
        .toEqual(tide.low);
    });
    it('renders an empty tide.low in #low-tide-value when not passed in props', ()=> {
      const component = shallow(<Times />);
      const p = component.find("#low-tide-value");
      expect(p.text())
        .toEqual("");
    });
  });  
});
describe('sun', () => {
  describe('sunrise', ()=> {
    it('renders sun.rise value in #sunrise-value when passed in props', ()=> {
      const sun ={rise:"@6:30am"};
      const component = shallow(<Times sun={sun} />);
      const p = component.find("#sunrise-value");
      expect(p.text())
        .toEqual(sun.rise);
    });
    it('renders an empty sun.rise in #sunrise-value when not passed in props', ()=> {
      const component = shallow(<Times />);
      const p = component.find("#sunrise-value");
      expect(p.text())
        .toEqual("");
    });
  });  
  describe('sunset', ()=> {
    it('renders sun.set value in #sunset-value when passed in props', ()=> {
      const sun ={set:"@7:30pm"};
      const component = shallow(<Times sun={sun} />);
      const p = component.find("#sunset-value");
      expect(p.text())
        .toEqual(sun.set);
    });
    it('renders an empty tide.low in #sunset-value when not passed in props', ()=> {
      const component = shallow(<Times />);
      const p = component.find("#sunset-value");
      expect(p.text())
        .toEqual("");
    });
  });  
});
