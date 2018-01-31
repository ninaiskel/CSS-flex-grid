import React, { Component } from 'react';
import Header from './components/header/base.js';
import Sidebar from './components/sidebar/base.js';
import Content from './components/content/base.js';
import Footer from './components/footer/base.js';

import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      properties : {},
    })
  }
  componentWillMount () {
    this.setState({
      properties : [
        {
          id: 1,
          name: "align-content"
        },
        {
          id: 2,
          name: "align-items"
        },
        {
          id: 3,
          name: "align-self"
        },
        {
          id: 4,
          name: "animation"
        },
        {
          id: 5,
          name: "background"
        },
        {
          id: 6,
          name: "border"
        },
        {
          id: 7,
          name: "display"
        }
      ]
    })
  }

  render() {
    const {  properties } = this.state

    return (
      <div className="App container">
        <Sidebar  properties={ properties }/>
        <Header className="header" />
        <Content  />
        <Footer  />
      </div>
    );
  }
}

export default App;
