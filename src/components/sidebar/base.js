import React from 'react';
import Searcher from './searcher.js';
import Properties from './properties.js';

import './css/sidebar.css';

const Sidebar = ({ properties, search, updateSearch }) => (
  <section className="sidebar">
    <Searcher search={ search }
              updateSearch={ updateSearch }/>
    <Properties search={ search }
                properties={ properties }/>
  </section>
);

export default Sidebar;
