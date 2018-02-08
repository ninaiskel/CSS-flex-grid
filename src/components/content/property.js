import React from 'react';
import Title from '.././title.js';

const Property = ({ property }) => (
  <div className="property">
    <Title />
    <p className="property-description">
      { property.name } { property.description }
    </p>
  </div>
);

export default Property;
