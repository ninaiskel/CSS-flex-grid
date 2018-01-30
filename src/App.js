import React, { Component } from 'react';
import Header from './components/header/base.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="header" />
      </div>
    );
  }
}

export default App;
