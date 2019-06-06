import React from 'react';
import './App.css';
// import AllBeer from './components/AllBeer'
import Home from './components/Home'
import Beers from './components/Beers'
import BeersDetails from './components/Beer-Details'
import RandomBeer from './components/Random-Beer'
import Addbeer from './components/AddBeer'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/beers" exact component={Beers} />
      <Route path="/beers/:id" component={BeersDetails} />
      <Route path="/beers/random" component={RandomBeer} />
      <Route path="/addbeer" component={Addbeer} />
    </Switch>

  )
}

export default App;
