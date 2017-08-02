import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header.js'
import Times from './Times.js'

class App extends Component {
  render() {
    const model = {
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
        height:"2-3ft waves"
      },
      crowds: {
        bestGuess:"Shouldn't be too crowded!"
      }
    };
    const apis={
      waves:"http://ja.magicseaweed.com/developer/forecast-api",
      weather:"http://ja.magicseaweed.com/developer/forecast-api", // Has both on first glance
    }
    return (
      <div className="App">
        <div className="App-header">
          <Header proclamation={model.proclamation} beach={model.beach} />
        </div>
        <div id="inspiration">
          <Times sun={model.sun} tide={model.tide} />
          <div id="weather">
            <div id="temperature">{model.weather.temperature}</div>
            <div id="weatherIcon">
              <img src={model.weather.icon.uri} 
                alt={model.weather.description}
                title="Weather Description Icon"/>
            </div>
          </div>
          <div id="gnar">
            <p>{model.waves.height}</p>
          </div>
          <div id="crowds">
            <p>{model.crowds.bestGuess}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
