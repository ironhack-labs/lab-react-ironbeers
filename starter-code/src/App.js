import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ListBeers from './ListBeers.js';
import SingleBeer from './SingleBeer';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beers' component={ListBeers} />
          <Route exact path='/beers/:beerId' component={SingleBeer} />
          <Route exact path='/random-beer' component={RandomBeer} />
          <Route exact path='/new-beer' component={NewBeer} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
