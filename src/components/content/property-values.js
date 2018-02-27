import React from 'react';
import './css/property.css';

const PropertyValues = ({ property }) => {

  return (
    <div className="property-values">
      <h2>Valores</h2>
      <p>Esta propiedad acepta { property.valueAmount } valores diferentes:</p>
      <ul className="property-values-list">
        { property.values && property.values.map((value, index) => {
          return <li key={ index }>
          <span className="values-title">{ value.title }</span> { value.content }
          </li>
        })}
      </ul>
    </div>
  )
};

export default PropertyValues;
