import React from 'react';
import Searcher from './searcher.js';
import Properties from './properties.js';

import './css/sidebar.css';

const Sidebar = ({ properties, search, updateSearch, propertySelect, openSidebar }) => (
  <section className="sidebar">
    <Searcher
      search={ search }
      updateSearch={ updateSearch }
      openSidebar={ openSidebar }/>
    <Properties
      search={ search }
      properties={ properties }
      propertySelect={ propertySelect }/>
  </section>
);

export default Sidebar;
