import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <section className="header">
        <div className="logo">CSS-Léx</div>
        <div className="share-links">
          <p>Comparte:</p>
          <a className="share-links-icon"href="#" >twitter</a>
          <a className="share-links-icon"href="#">fb</a>
          <a className="share-links-icon"href="#">github</a>

        </div>
      </section>
    );
  }
}

export default Header;
