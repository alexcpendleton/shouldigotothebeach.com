import React, { Component } from 'react';

class Times extends Component {
  render() {
    const model = Object.assign({}, {
      tide:{high:"",low:""},
      sun:{rise:"",set:""}
    }, this.props);
    return (
        <div id="times">
          <p><strong>Sunrise</strong><span id="sunrise-value" className="description">{model.sun.rise}</span></p>
          <p><strong>Sunset</strong><span id="sunset-value" className="description">{model.sun.set}</span></p>
          <p><strong>High Tide</strong><span id="high-tide-value" className="description">{model.tide.high}</span></p>
          <p><strong>Low Tide</strong><span id="low-tide-value" className="description">{model.tide.low}</span></p>
        </div>
    )
  }
}
export default Times;
