import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Switch } from 'react-router';
import Home from './pages/Home/Home'
import './App.css';
import Beers from './pages/Beers/Beers';
import NewBeer from './pages/Beers/NewBeer';
import RandomBeer from './pages/Beers/RandomBeer';
import BeerDetails from './pages/Beers/BeerDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/beers" render={() => <Beers />} />
        <Route exact path="/random-beer" render={() => <RandomBeer />} />
        <Route exact path="/new-beer" render={() => <NewBeer />} />
        <Route path="/beers/:beerId" render={(props) => <BeerDetails {...props} />} />

      </Switch >
    </div >
  );
}

export default App;
