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
      <a href="https://twitter.com/home?status=https%3A//ninaiskel.github.io/CSS-flex-grid/"
         className="icon share-links-icon"
         target="_blank"
         data-url="https://ninaiskel.github.io/CSS-flex-grid/">
         <Icon name="icon-twitter"/>
      </a>
      <a href="http://www.facebook.com/sharer.php?u=https://ninaiskel.github.io/CSS-flex-grid/"
         className="icon share-links-icon"
         target="_blank">
        <Icon name="icon-facebook"/>
      </a>
    </div>
  </section>
);


export default Header;
