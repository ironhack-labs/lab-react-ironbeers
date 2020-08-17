import React from 'react';
import Home from './components/Home';

import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import AllBeers from './components/beers/AllBeers';
import BeerDetails from './components/beers/BeerDetails';
import RandomBeer from './components/beers/RandomBeer';
import AddBeer from './components/beers/AddBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/beers' component={AllBeers} />
        <Route exact path='/beers/:beersID' component={BeerDetails} />
        <Route exact path='/random-beer' component={RandomBeer} />
        <Route exact path='/new-beer' component={AddBeer} />
      </Switch>

    </div>
  );
}
const AppWithRouter = withRouter(App);
export default AppWithRouter;
