import React, { Component } from 'react';
import Clock from './components/clock/clock.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="clock">
          <Clock />
        </div>
      </div>
    );
  }
}

export default App;
