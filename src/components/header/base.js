import React from 'react';
import Icon from './../icons'
import './header.css';

const Header = ({ openSidebar }) => (
  <section className="header">
    <div className="logo">
      <button onClick={ openSidebar } className="icon button-searcher">
        <Icon name="icon-search" />
      </button>
      <div class="logo">
        <a href=""><h1>FlexGrid</h1></a>
      </div>
    </div>
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


export default Header;
