import './App.css';
import React from 'react';
import {Switch, Route} from "react-router-dom";
import HomePage from "./Components/HomePage";
import Beers from "./Components/Beers";
import RandomBeer from "./Components/RandomBeer";
import NewBeer from "./Components/NewBeer";
import BeerDetails from "./Components/BeerDetails";

const App = () => {
  return (
  <div>
  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route exact path="/beers" component={Beers}/>
    <Route exact path="/beers/:beerId" component={BeerDetails}/>
    <Route exact path="/random-beer" component={RandomBeer}/>
    <Route exact path="/new-beer" component={NewBeer}/>
  </Switch>

</div>
  )
}

export default App