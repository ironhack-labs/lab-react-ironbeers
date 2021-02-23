import React from 'react';
import { Link, Route } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <Route>
        <Link className='center' to="/">
          <img  src='./images/iconfinder_home_1608930.png' alt='home'/>
        </Link>
      </Route>
    </nav>
  );
}
export default NavBar