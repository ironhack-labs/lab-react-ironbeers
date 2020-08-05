import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Beers from './components/Beers';

import NewBeers from './components/NewBeers';
import BeerDetails from './components/BeerDetails';
import Random from './components/Random';
import RandomBeer from './components/RandomBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/random" component={Random} />
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route path="/random-beer" component={RandomBeer} />

        <Route exact path="/new-beer" component={NewBeers} />
        <Route exact path="/:id" component={BeerDetails} />
        {/* <Route path="/:id" render={(props) => <BeerDetails {...props} />} /> */}
      </Switch>
    </div>
  );
}

export default App;
