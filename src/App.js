import React, { Component } from 'react';
import Header from './components/header/base.js';
import Sidebar from './components/sidebar/base.js';
import Content from './components/content/base.js';
import Footer from './components/footer/base.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Sidebar  />
        <Header className="header" />
        <Content  />
        <Footer  />
      </div>
    );
  }
}

export default App;
