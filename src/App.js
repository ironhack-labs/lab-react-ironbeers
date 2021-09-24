import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router-dom';
import './App.css';
import BeerDetails from './components/BeerDetails/BeerDetails';
import HomePage from './components/HomePage/HomePage';
import AllBeers from './components/pages/AllBeers';
import NewBeer from './components/pages/NewBeer';
import RandomBeer from './components/pages/RandomBeer';


function App() {
  return (
    <>
    <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/beers" render={() => <AllBeers />} />
        <Route exact path="/random-beers" render={() => <RandomBeer />} />
        <Route path="/beers/:id" render={(props) => <BeerDetails {...props} />} />
        <Route path="/new-beers" render={(props) => <NewBeer {...props} />} />
    </Switch>
   </>
  );
}

export default App;
