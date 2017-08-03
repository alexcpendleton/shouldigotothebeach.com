import React, { Component } from 'react';

class Crowds extends Component {
  render() {
    /*
    */
    const model = Object.assign({}, {
      description:""
    }, this.props);
    return (
        <div id="crowds">
          <p id="crowd-description">{model.description}</p>
        </div>
    )
  }
}
export default Crowds;
