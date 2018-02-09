import React from 'react';
import './css/sintaxis.css';

const Sintaxis = ({ property }) => (
  <div className="sintaxis">
    <h2>Sintaxis CSS</h2>
    <div className="sintaxis-wrap">
      <p>{ property.name }</p>
      <span>{ property.sintaxis }</span>
    </div>
  </div>
);

export default Sintaxis;
