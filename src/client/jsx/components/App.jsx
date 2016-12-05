import React, { Component } from 'react';
import Navbar from './Navbar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyState: '',
    };
  }

  render() {
    return (
      <div id="app-root">
        <Navbar />
        <div>
          { this.props.children ? this.props.children : null }
        </div>
      </div>
    );
  }
}

export default App;
