import React from 'react';
import './css/interest-links.css';

const InterestsLinks = ({ property }) => (
  <div className="wrap-links">
    <div className="link-info">
      <h2>Enlaces de interés</h2>
      <ul>
        { property.links && property.links.map((link, index) => {
          return <li key={ index }>
                  <a target="_blank" href={ link.link }>{ link.name }</a>
                </li>
        })}
      </ul>
    </div>
  </div>
);

export default InterestsLinks;
