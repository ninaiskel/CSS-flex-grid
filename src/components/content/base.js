import React, { Component } from 'react';
import Property from './property.js';
import Sintaxis from './sintaxis.js';
import PropertyValues from './property-values.js';
import ExampleImg from './example-img.js';
import './content.css';

class Content extends Component {
  render() {
    return (
      <section className="content">
        <Property />
        <Sintaxis />
        <PropertyValues />
        <ExampleImg />
      </section>
    );
  }
}

export default Content;
