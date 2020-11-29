import React from 'react';
import './App.css';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import Beers from './components/Beers';
import BeerDetail from './components/BeerDetail';
import RandomBeer from './components/RandomBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beer/:id" component={BeerDetail} />
        <Route exact path="/random-beer" component={RandomBeer} />
        {/* <Route exact path="/new-beer" component={NewBeer} /> */}
      </Switch>
    </div>
  );
}

export default App;
