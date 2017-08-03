import React, { Component } from 'react';

class Waves extends Component {
  render() {
    /*
    */
    const model = Object.assign({}, {
      description:""
    }, this.props);
    return (
        <div id="waves">
          <p id="wave-description">{model.description}</p>
        </div>
    )
  }
}
export default Waves;
