import React, { Component } from 'react';
import properties from './data/data.js';
import Header from './components/header/base.js';
import Sidebar from './components/sidebar/base.js';
import Content from './components/content/base.js';
import Footer from './components/footer/base.js';

import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this)
    this.propertySelect = this.propertySelect.bind(this)
    this.state = ({
      properties : properties,
      search : '',
      property: ''
    })
  }

  updateSearch(event) {
    console.log(event.target.value)
    this.setState({ search: event.target.value })
    event.preventDefault();
  }

  propertySelect(property) {
    console.log(property)
    this.setState({ property: property })
  }

  render() {
    const {  properties, search, property } = this.state
    return (
      <div className="App container">
        <Sidebar  properties={ properties }
                  search={ search }
                  updateSearch={ this.updateSearch }
                  propertySelect={ this.propertySelect }/>
        <Header className="header" />
        <Content  property= { property }
                  propertySelect={ this.propertySelect }/>
        <Footer  />
      </div>
    );
  }
}

export default App;
