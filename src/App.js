import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Beers from './pages/Beers';
import SingleBeer from './pages/SingleBeer';
import NewBeer from './pages/NewBeer';

const App = (props) => {
  return (
    <Switch>
      {/* Syntax is: exact guarantees that the path has to be **exactly** that url  */}
      <Route exact path="/" component={HomePage} />
      <Route exact path="/beers" component={Beers} />
      <Route exact path="/random-beer" component={SingleBeer} />
      <Route exact path="/new-beer" component={NewBeer} />
      <Route exact path="/beers/:id" component={SingleBeer} />
      {/* Syntax: path - is the url that our website will be on  */}
    </Switch>
  );
};

App.propTypes = {};

export default App;
