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
          <a className="icon share-links-icon"href="#" >
            <Icon name="icon-twitter" />
          </a>
          <a className="icon share-links-icon"href="#">
            <Icon name="icon-facebook" />
          </a>
          <a className="icon share-links-icon"href="#">
            <Icon name="icon-github" />
          </a>

        </div>
      </section>
    );
  }
}

export default Header;
