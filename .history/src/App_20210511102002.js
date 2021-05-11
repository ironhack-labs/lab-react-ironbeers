import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Beers from './components/beers/Beers';
import BeerDetails from './components/beerDetails/BeerDetails';
import RandomBeer from './components/randomBeer/RandomBeer';
import NewBeer from './components/newBeer/NewBeer'

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path="/:id" component={BeerDetails} />
          <Route  path="/random" component={RandomBeer} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
