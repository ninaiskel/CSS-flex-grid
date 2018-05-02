import React from 'react';

const Demo = ({ property }) => (
  <div className="demo">
    <h2>Demo</h2>
    <div className="demo-pen">
      <h4>Puedes ver un ejemplo en:</h4>
      <a className="button"
         href={ property.demo }
         target="_blank">
         Codepen
      </a>
    </div>
  </div>
);

export default Demo;
