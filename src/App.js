import React, { Component } from 'react';
import Header from './components/header/base.js';
import Sidebar from './components/sidebar/base.js';
import Content from './components/content/base.js';
import Footer from './components/footer/base.js';

import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this)
    this.state = ({
      properties : {},
      search : ''
    })
  }

  updateSearch(event) {
    console.log(event.target.value)
    this.setState({ search: event.target.value })
    event.preventDefault();
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
    const {  properties, search } = this.state

    return (
      <div className="App container">
        <Sidebar  properties={ properties }
                  search={ search }
                  updateSearch={ this.updateSearch.bind(this) }/>
        <Header className="header" />
        <Content  />
        <Footer  />
      </div>
    );
  }
}

export default App;
