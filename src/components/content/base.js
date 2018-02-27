import React from 'react';
import Property from './property.js';
import Display from './display.js';
import Sintaxis from './sintaxis.js';
import PropertyValues from './property-values.js';
import ExampleImg from './example-img.js';
import Demo from './demo.js';
import BrowserSupport from './browser-support.js';
import InterestsLinks from './interests-links.js';
import './content.css';

const Content = ({ property }) => (
  <section className="content">
    { property ?
      <div>
        <Property  property= { property }/>
        <Sintaxis property= { property }/>
        <PropertyValues property= { property } />
        <ExampleImg property= { property }/>
        <Demo property= { property }/>
        <BrowserSupport property= { property }/>
        <InterestsLinks property= { property }/>
      </div>
    :
      <div>
        <Display />
      </div>
    }
  </section>
);


export default Content;
