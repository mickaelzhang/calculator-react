import React, { Component } from 'react';

import Calculator from '@containers/Calculator';
import ComputeHistory from '@containers/ComputeHistory';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
        <ComputeHistory />
      </div>
    );
  }
}

export default App;
