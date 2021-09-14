import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Beers from "./components/Beers/Beers";
import BeerInfo from "./components/BeerInfo/BeerInfo"
import RandomBeer from "./components/RandomBeer/RandomBeer"


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/beers" exact component={Beers} />
        <Route path="/beers/:beerId"  component={BeerInfo} />
        <Route path="/random-beer" component={RandomBeer} />
      </Switch>
      <Route path="/" exact component={Home} />
    </div>
  );
}

export default App;
