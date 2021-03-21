import React from 'react';
import Home from './Views/Home';
import Beers from './Views/Beers';
import RandomBeer from './Views/RandomBeer';
import NewBeer from './Views/NewBeer';
import OneBeer from './Views/OneBeer';
import { Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/random" component={RandomBeer} />
        <Route exact path="/beers/new" component={NewBeer} />
        <Route exact path="/beers/:id" component={OneBeer} />
      </Switch>
    </div>
  );
}

export default App;
