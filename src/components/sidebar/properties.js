import React, { Component } from 'react';
import './css/properties.css';

class Properties extends Component {
  render() {
    const { properties, search,  propertySelect  } = this.props
    let filteredProperties = properties.filter((property) => {
      return property.name.indexOf(search) !== -1;
    });

    return (
      <ul className="properties-list">
      <h2>Propiedades CSS</h2>
      { filteredProperties.map((property, index) => {
          return <li onClick= { propertySelect.bind(this, property) } className="property-item"
                      key={ index }>
                      { property.name }
                  </li>
          })}
      </ul>
    );
  }
}

export default Properties;
