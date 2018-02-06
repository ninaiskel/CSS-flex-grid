import React, { Component } from 'react';
import Property from './property.js';
import Sintaxis from './sintaxis.js';
import PropertyValues from './property-values.js';
import ExampleImg from './example-img.js';
import Demo from './demo.js';
import BrowserSupport from './browser-support.js';
import './content.css';

class Content extends Component {
  render() {
    return (
      <section className="content">
        <Property />
        <Sintaxis />
        <PropertyValues />
        <ExampleImg />
        <Demo />
        <BrowserSupport />
      </section>
    );
  }
}

export default Content;
