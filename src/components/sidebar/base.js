import React from 'react';
import Searcher from './searcher.js';
import Properties from './properties.js';

import './sidebar.css';

const Sidebar = ({ properties }) => (
  <section className="sidebar">
    <Searcher />
    <Properties properties={ properties }/>
  </section>
);

export default Sidebar;
