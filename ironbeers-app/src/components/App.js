import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './home/Home'
import List from './List'
import RandomBeer from './RandomBeer'
import NewBeer from './NewBeer'
import Details from './Details'




function App() {

  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/beers" exact render={() => <List />} />
      <Route path="/beers/:id" exact render={props => <Details {...props} />} />
      <Route path="/random-beer" exact render={() => <RandomBeer />} />
      <Route path="/new-beer" exact render={() => <NewBeer />} />
    </Switch>
  )
}

export default App;
