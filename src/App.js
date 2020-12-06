import React from 'react';
import BeerList from './BeerList'
import { Route,Switch } from "react-router-dom";
import Home from './Home';
import BeerDetail from './BeerDetail';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path = "/"  component = {Home}/>
        <Route exact path = "/beers" component = {BeerList}/>
        <Route exact path = "/beers/:id" component = {BeerDetail} />
        <Route exact path = "/random-beer" component = {RandomBeer} />
        <Route exact path = "/new-beer" component = {NewBeer}/>
      </Switch>
    </div>
  );
}

export default App;
