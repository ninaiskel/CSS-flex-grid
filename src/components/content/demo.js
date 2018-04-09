import React from 'react';
import Codepen from 'react-codepen-embed';


const Demo = ({ property }) => (
  <div className="demo">
    <h2>Demo</h2>
    <div className="demo-pen">
      <h4>Puedes ver el por <a href="https://codepen.io/Ninaiskel"> @Ninaiskel</a>en:</h4>
      <a className="button"
         href={ property.demo }
         target="_blank">
         Codepen
      </a>
    </div>
  </div>
);

export default Demo;
