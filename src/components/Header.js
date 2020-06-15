import React from 'react';
import Home from './Home';
import { Route, NavLink, Switch } from 'react-router-dom';

function Header() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default Header;
