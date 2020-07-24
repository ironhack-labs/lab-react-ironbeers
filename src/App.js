import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import { Switch, Route } from "react-router-dom";
import Beers from './Components/Beers'
import NewBeer from './Components/NewBeer'
import RandomBeer from './Components/RandomBeer'
import BeerDetails from './Components/BeerDetails'

function App() {
  return (
    <div className="App">

      <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/all-beers" component={Beers} />
            <Route path="/new-beer" component={NewBeer} />
            <Route path="/random-beer" component={RandomBeer} />
            <Route path="/all-beers/:beerId" component={BeerDetails} />
          </Switch>
    </div>
  );
}

export default App;
