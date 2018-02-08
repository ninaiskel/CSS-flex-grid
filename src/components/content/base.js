import React from 'react';
import Property from './property.js';
import Sintaxis from './sintaxis.js';
import PropertyValues from './property-values.js';
import ExampleImg from './example-img.js';
import Demo from './demo.js';
import BrowserSupport from './browser-support.js';
import InterestsLinks from './interests-links.js';
import './content.css';

const Content = ({ property }) => (
  <section className="content">
    <Property  property= { property }/>
    <Sintaxis />
    <PropertyValues />
    <ExampleImg />
    <Demo />
    <BrowserSupport />
    <InterestsLinks />
  </section>
);


export default Content;
