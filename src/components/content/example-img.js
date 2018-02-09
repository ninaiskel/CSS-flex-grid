import React from 'react';
import './css/example-img.css';

const ExampleImg = ({ property }) => (
  <div className="example-img">
    <h2>Example</h2>
    <img className="img-property img-property-big"
         alt="property"
         src= { property.example } />

    <img className="img-property img-property-small"
         alt="property"
         src= { property.exampleMobile } />
  </div>
);

export default ExampleImg;
