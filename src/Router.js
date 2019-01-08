import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Home             from './components/Home.js/Home';
import Beers            from './components/Beers/Beers';
import BeerDetails      from './components/BeerDetails.js/BeerDetails';
import Form             from './components/Form.js/Form';

class Router extends Component {
  render() {
    const {getRandom, beers, random, onChange, onSubmit, onSearch} = this.props;

    return (
      <Switch>
        <Route
          exact
          path   = "/"
          render = { () => <Home getRandom={getRandom} /> }
        />
        <Route
          exact
          path   = "/beers"
          render = { () => <Beers beers={beers} onChange={onSearch} /> }
        />
        <Route
          path   = "/beers/:id"
          render = { props => <BeerDetails beers={beers} {...props} /> }
        />
        <Route
          path   = "/random"
          render = { props => <BeerDetails beers={random} {...props} /> }
        />
        <Route
          path   = "/new"
          render = { props => <Form onChange={onChange} onSubmit={onSubmit} {...props} /> }
        />
      </Switch>
    );
  }
}

export default Router;