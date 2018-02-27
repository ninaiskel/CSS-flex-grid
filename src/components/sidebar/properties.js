import React, { Component } from 'react';
import './css/properties.css';

class Properties extends Component {
  render() {
    const { properties, search,  propertySelect  } = this.props
    const searchUpdated = search.toLowerCase()
    let filteredPropertiesFlexbox = properties.flexbox.filter((property) => {
      return property.name.indexOf(searchUpdated) !== -1;
    });
    let filteredPropertiesCssGrid = properties.cssGrid.filter((property) => {
      return property.name.indexOf(searchUpdated) !== -1;
    });

    return (
      <ul className="properties-list">
        <h3 className="property-flex">Propiedades Flexbox</h3>
        { filteredPropertiesFlexbox.map((property, index) => {
            return (
              <li
                onClick={ propertySelect.bind(this, property) }
                className="property-item"
                key={ index }>
                { property.name }
              </li>
            )
        })}
        <h3 className="property-css-grid">Propiedades CSS grid</h3>
        { filteredPropertiesCssGrid.map((property, index) => {
            return (
              <li
                onClick={ propertySelect.bind(this, property) }
                className="property-item"
                key={ index }>
                { property.name }
              </li>
            )
        })}
      </ul>
    );
  }
}

export default Properties;
