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
    this.openSidebar = this.openSidebar.bind(this)

    this.state = ({
      properties : properties,
      search : '',
      property: '',
      sidebar: false
    })
  }

  updateSearch(event) {
    this.setState({ search: event.target.value })
    event.preventDefault();
  }

  propertySelect(property) {
    this.setState({
      property: property,
      sidebar: false
    })
  }

  openSidebar(){
    const { sidebar } = this.state
    this.setState({ sidebar: !sidebar })
  }

  render() {
    const {  properties, search, property, sidebar } = this.state
    const className = sidebar ? "App container sidebar-active" : "App container"
    return (
      <div className={ className }>
        <Sidebar  properties={ properties }
                  search={ search }
                  updateSearch={ this.updateSearch }
                  propertySelect={ this.propertySelect }
                  openSidebar={ this.openSidebar }/>
        <Header className="header" openSidebar={ this.openSidebar }/>
        <Content  property= { property }
                  propertySelect={ this.propertySelect }
                  openSidebar={ this.openSidebar }/>
        <Footer  />
      </div>
    );
  }
}

export default App;
