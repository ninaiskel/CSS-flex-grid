import React from 'react';

const Title = ({ property }) => (
  <div className="wrap-title">
    <h1>{ property.name }</h1>
    <span>{ property.tag }</span>
  </div>

);

export default Title;
