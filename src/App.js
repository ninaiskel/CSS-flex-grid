import React, { Component } from 'react';
import Header from './components/header/base.js';
import Sidebar from './components/sidebar/base.js';
import Content from './components/content/base.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar  />
        <Header className="header" />
        <Content  />
      </div>
    );
  }
}

export default App;
