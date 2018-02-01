import React from 'react';
import './css/searcher.css';

const Searcher = ({ search, updateSearch }) => (
  <div className="searcher">
    <input type="text"
      className="searcher-input"
      search={ search }
      value={ search }
      onChange= { updateSearch }
      placeholder=" Buscar una propiedad"
    />
  </div>
);

export default Searcher;
