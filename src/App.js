import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import BeersList from './components/BeersList';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import BeerDetail from './components/BeerDetail';


function App() {
  return (
    <div className="App">
      <Homepage />

      <Switch>
        <Route exact path="/beers" component={BeersList} />
        <Route path="/beers/:id" component={BeerDetail} />
        <Route path="/new-beer" component={NewBeer} />

        <Route path="/random-beer" component={RandomBeer} />
      </Switch>
    

    </div>
  );
}

export default App;
