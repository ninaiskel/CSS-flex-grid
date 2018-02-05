import React, { Component } from 'react';
import Icon from './../icons'
import './header.css';

class Header extends Component {
  render() {
    return (
      <section className="header">
        <div className="logo">CSS-Léx</div>
        <div className="share-links">
          <p>Comparte:</p>
          <button className="icon share-links-icon">
            <Icon name="icon-twitter"/>
          </button>
          <button className="icon share-links-icon">
            <Icon name="icon-facebook"/>
          </button>
          <button className="icon share-links-icon">
            <Icon name="icon-github" />
          </button>
        </div>
      </section>
    );
  }
}

export default Header;
