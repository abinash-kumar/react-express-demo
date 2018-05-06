import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactClient from '../src/ReactClient/components/ReactClient';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ReactClient />
      </div>
    );
  }
}

export default App;
