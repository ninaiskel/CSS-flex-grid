import React from 'react';
import './css/property.css';

const PropertyValues = () => (
  <div className="property-values">
    <h2>Valores</h2>
    <p>Esta propiedad acepta { } valores diferentes:</p>
    <ul className="property-values-list">
      <li>
        <span className="values-title">flex-start:</span> Se alinean al inicio del contenedor.
      </li>
      <li>
        <span className="values-title">flex-align:</span> Se alinean al final del contenedor.
      </li>
      <li>
        <span className="values-title">center:</span> Se alinean al centro del contenedor.
      </li>
      <li>
        <span className="values-title">space-between:</span> Se alinean de manera uniforme, desde el inicio del contenedor y la última esta al final del contenedor.
      </li>
      <li>
        <span className="values-title">space-around:</span> Se distribuyen con espacios iguales entre ellas.
      </li>
      <li>
        <span className="values-title">strech (default):</span> Se estiran para ocupar el espacio restante.
      </li>
    </ul>
  </div>
);

export default PropertyValues;
