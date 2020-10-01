import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AllBeers from './components/AllBeers';
import BeerDetails from "./components/BeerDetails"

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <Home />}/>
        <Route path="/beers" exact render={() => <AllBeers />}/>
        <Route path="/beers/:id" exact render={props => <BeerDetails {...props}/>}/>
      </Switch>
    </>
  );
}

export default App;
