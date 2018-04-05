import React, { Component } from 'react';

import Calculator from '@containers/Calculator';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
