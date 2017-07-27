import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var deets = {
      proclamation:"Heck yeah, you should",
      tides: { high: "7:30pm", low:"4:20am" },
      weather: {
        icon: {
          uri:"https://cdnjs.cloudflare.com/ajax/libs/fatcow-icons/20130425/FatCow_Icons32x32/weather_sun.png",
          description:"70° and sunny",
        },
        temperature:"70°"
      },
      waves: {
        height:"2-3ft waves"
      }
    };
    return (
      <div className="App">
        <div className="App-header">
          <h2>Should I go to the beach?</h2>
          <h3 id="proclamation">{deets.proclamation}</h3>
        </div>
        <div id="inspiration">
          <div id="tides">
            <p><strong>High:</strong>{deets.tides.high}</p>
            <p><strong>Low:</strong>{deets.tides.low}</p>
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
        </div>
      </div>
    );
  }
}

export default App;
