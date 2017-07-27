import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var deets = {
      proclamation:"Heck yeah, you should",
      beach: {
        name:"Crystal Cove, Newport Beach, CA"
      },
      times: { highTide: "@7:30pm", lowTide:"@4:20am", sunrise:"@6:08am", sunset:"@7:55pm" },
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
    var apis = {
      waves:"http://ja.magicseaweed.com/developer/forecast-api",
      weather:"http://ja.magicseaweed.com/developer/forecast-api", // Has both on first glance
    }
    return (
      <div className="App">
        <div className="App-header">
          <h2>Should I go to the beach?</h2>
          <h3 id="proclamation">{deets.proclamation}</h3>
          <h4>{deets.beach.name}</h4>
        </div>
        <div id="inspiration">
          <div id="times">
            <p><strong>Sunrise</strong><span className="description">{deets.times.sunrise}</span></p>
            <p><strong>Sunset</strong><span className="description">{deets.times.sunset}</span></p>
            <p><strong>High Tide</strong><span className="description">{deets.times.highTide}</span></p>
            <p><strong>Low Tide</strong><span className="description">{deets.times.lowTide}</span></p>
          </div>
          <div id="weather">
            <div id="temperature">{deets.weather.temperature}</div>
            <div id="weatherIcon">
              <img src={deets.weather.icon.uri} 
                alt={deets.weather.description}
                title="Weather Description Icon"/>
            </div>
          </div>
          <div id="gnar">
            <p>{deets.waves.height}</p>
          </div>
          <div id="crowds">
            <p>{deets.crowds.bestGuess}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
