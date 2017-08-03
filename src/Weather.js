import React, { Component } from 'react';

class Weather extends Component {
  render() {
    /*

    icon: {
      uri:"https://cdnjs.cloudflare.com/ajax/libs/fatcow-icons/20130425/FatCow_Icons32x32/weather_sun.png",
      description:"70° and sunny",
    }
    */
    const model = Object.assign({}, {
      icon:{
        uri:"",
        description:""
      }
    }, this.props);
    return (
        <div id="weather">
          <div id="weather-temperature">{model.temperature}</div>
          <img id="weather-icon" 
                src={model.icon.uri} 
                alt={model.icon.description}
                title="Weather Description Icon"/>
        </div>
    )
  }
}
export default Weather;
