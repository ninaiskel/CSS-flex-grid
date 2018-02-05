import React, { Component } from 'react';
import Property from './property.js';
import './content.css';

class Content extends Component {
  render() {
    return (
      <section className="content">
        <Property />
        
      </section>
    );
  }
}

export default Content;
