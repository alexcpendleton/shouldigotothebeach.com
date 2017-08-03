import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header.js'
import Times from './Times.js'
import Weather from './Weather.js'
import Waves from './Waves.js'
import Crowds from './Crowds.js'

class App extends Component {
  render() {
    const model = Object.assign({}, {
      proclamation:"Heck yeah, you should",
      beach: {
        name:"Crystal Cove, Newport Beach, CA"
      },
      tide: { high: "@7:30pm", low:"@4:20am"},
      sun:{ rise:"@6:08am", set:"@7:55pm" },
      weather: {
        icon: {
          uri:"https://cdnjs.cloudflare.com/ajax/libs/fatcow-icons/20130425/FatCow_Icons32x32/weather_sun.png",
          description:"70° and sunny",
        },
        temperature:"70°"
      },
      waves: {
        description:"2-3ft waves"
      },
      crowds: {
        description:"Shouldn't be too crowded!"
      }
    }, this.props);
    const apis={
      waves:"http://ja.magicseaweed.com/developer/forecast-api"
    }
    return (
      <div className="App">
        <Header proclamation={model.proclamation} beach={model.beach} />
        <div id="inspiration">
          <Times sun={model.sun} tide={model.tide} />
          <Weather temperature={model.weather.temperature} icon={model.weather.icon} />
          <Waves description={model.waves.description} />
          <Crowds description={model.crowds.description} />
        </div>
      </div>
    );
  }
}

export default App;
