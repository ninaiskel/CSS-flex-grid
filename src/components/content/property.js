import React from 'react';
import Title from '.././title.js';
import './content.css';


const Property = () => (
  <div className="property">
    <Title />
    <p className="property-description">
      align-content  define como se alinea dentro de un contenedor flexible (Flexible Box Layout module), solo se aplica si  <a className="content-link" href="#">flex-wrap: wrap</a> está presente y si hay varias lineas de elemntos de flexbox.
    </p>
  </div>
);

export default Property;
