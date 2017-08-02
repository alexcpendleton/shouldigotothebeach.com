import React, { Component } from 'react';

class Header extends Component {
  render() {
    const model = Object.assign({}, {
      beach:{name:""}
    }, this.props);
    return (
      <div>
          <h2>Should I go to the beach?</h2>
          <div id="proclamation">{model.proclamation}</div>
          <h4>{model.beach.name}</h4>
      </div>
    )
  }
}

export default Header;
