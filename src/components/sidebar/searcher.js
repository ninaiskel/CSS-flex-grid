import React from 'react';
import './css/searcher.css';
import Icon from './../icons'

const Searcher = ({ search, updateSearch, openSidebar }) => (
  <div className="wrap-searcher">
    <div className="searcher">
      <input type="text"
        className="searcher-input"
        search={ search }
        value={ search }
        onChange= { updateSearch }
        placeholder=" Buscar una propiedad"
      />
      <button className="icon icon-searcher">
        <Icon name="icon-search" />
      </button>
    </div>
    <button className="close" onClick={ openSidebar }>
      <span></span>
    </button>
  </div>
);

export default Searcher;
