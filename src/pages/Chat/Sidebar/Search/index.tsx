import React from 'react';
import { Search } from '@material-ui/icons';

import './styles.scss';

const SidebarSearch = () => (
  <div className="sidebar__search">
    <div className="search__area">
      <Search className="search__icon" />
      <input type="text" className="search__field" placeholder="Search or start new chat" />
    </div>
  </div>
);

export default SidebarSearch;
