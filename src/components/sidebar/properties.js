import React from 'react';
import './properties.css';

const Properties = ({ properties }) => (
  <ul className="properties-list">
    <h2>Propiedades CSS</h2>
    { properties.map((property, index) => {
      return <li className="property-item"
                 key={ index }>
                 { property.name }</li>
    })}
  </ul>
);

export default Properties;
