import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from './Components/HomePage'
import Beers from './Views/Beers'
import RandomBeer from './Views/RandomBeer'
import NewBeer from './Views/NewBeer'
import BeerDetails from './Views/BeerDetails.jsx'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route exact path="/beers/:beerId" component={BeerDetails} />

      </Switch>
    </div>
  );
}

export default App;
