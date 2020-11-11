import React from 'react';

import { Link } from 'react-router-dom';

function NavBar() {
  return(
    <nav className="navbar bg-primary text-white">
      <Link to={`/`}><img src="https://www.pngkit.com/png/full/31-316559_white-home-icon-no-background.png" alt="home-icon" height="50px"/></Link>
    </nav>
  );
}

export default NavBar;