import React from 'react';

const BrowserSupport = ({ property }) => (
  <div className="browser-support">
    <h2>Browser Support</h2>
    <p>Es importante que revises cual es la compatiblidad con los diferentes navegadores</p>
    <a className="button"
       href={ property.BrowserSupport }
       target="_blank">
       Soporte de navegadores
    </a>
  </div>
);

export default BrowserSupport;
