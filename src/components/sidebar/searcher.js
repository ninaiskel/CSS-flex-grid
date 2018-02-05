import React from 'react';
import './css/searcher.css';
import Icon from './../icons'

const Searcher = ({ search, updateSearch }) => (
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
);

export default Searcher;
